import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//Add Contact
export const AddContacts = async (body)=>{
    return await commonAPI("POST",`${serverURL}/contacts`,body)
}

//get all Contacts
export const getAllContacts = async ()=>{
    return await commonAPI("GET",`${serverURL}/contacts`,"")

}

//delete a single contact
export const deleteAContact=async (id)=>{
    return   await commonAPI("DELETE", `${serverURL}/contacts/${id}`,{})
}

//get a single contact 
export const getAContact=async (id)=>{
    return   await commonAPI("GET", `${serverURL}/contacts/${id}`,"")
 }