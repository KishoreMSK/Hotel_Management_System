import supabase from "./supaBase";

export default async function getCabins(){
let { data, error } = await supabase
.from('cabins')
.select('*')

if(error) {
    console.log(error);
    throw new Error('Could not load cabins');
}
return data;
}

export async function deleteCabin(id){
const { error } = await supabase
.from('cabins')
.delete()
.eq('id', id)

if(error) {
    console.log(error);
    throw new Error('Could not delete cabin');
}
}