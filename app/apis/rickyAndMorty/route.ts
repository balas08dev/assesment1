import { NextResponse } from "next/server";
import path from "path";
import fsPromises from 'fs/promises';

const rickAndMortyPath = path.join(process.cwd(),'public/mocks/rickyAndMorty.json');

export async function GET(){
    try{
        const ram= await fsPromises.readFile(rickAndMortyPath,'utf-8');
        const json=JSON.parse(ram);
        return NextResponse.json(json);
    }
    catch{
        return new NextResponse(JSON.stringify({message:"No Data Found"}),
        {status:404,headers:{'content-type':'application/json'}});

    }
    
}