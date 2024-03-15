import { Contact } from "@/models";
import IContact from "../IContact";

class ContactRest implements IContact {

  private static _instance: ContactRest;

  private constructor() {
  }

  public static getInstance(): ContactRest {
    if(!this._instance) {
      this._instance = new ContactRest();
    }
    return this._instance;
  }

  newMesvsage(contact: Contact): Promise<Contact> {
    return Promise.resolve(contact);
  }
}

export default ContactRest;