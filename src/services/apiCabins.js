import toast from "react-hot-toast";
import supabase, { supabaseUrl } from "./supaBase";

export default async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Could not load cabins");
  }
  return data;
}

export async function createCabin(newCabin) {
  //   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/','');
  const imageName = newCabin.image.name;
  const filePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: filePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Could not delete cabin");
  }
  //uploading image
  const { error: uploadError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  //delete the cabin if there was an error in uploading the image
  if (uploadError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    toast.error('Cabin image could not be uploaded & the cabin was not created')
  }
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Could not delete cabin");
  }
}
