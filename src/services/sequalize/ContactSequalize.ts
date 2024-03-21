import { Contact } from "@/models";
import IContact from "../IContact";
import { ContactModel } from "./models";
class ContactSequalize implements IContact {

  private static _instance: ContactSequalize;

  private constructor() {
  }

  public static getInstance(): ContactSequalize {
    if(!this._instance) {
      this._instance = new ContactSequalize();
    }
    return this._instance;
  }

  newMessage(contact: Contact): Promise<Contact> {
    return ContactModel.create({...contact})
      .then(c => Promise.resolve(c)) as Promise<Contact>;
  }
}

export default ContactSequalize;