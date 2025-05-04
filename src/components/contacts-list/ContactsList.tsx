import {FC} from "react";
import styles from "./ContactsList.module.scss";
import type {Contacts} from "@/types";

export const contacts: Contacts = {
    email: "hovhanneskeshishyan@gmail.com",
    phone: "+37498088092",
    address: "Abovyan, Armenia",
    googleMapAddress: "https://goo.gl/maps/HK46jouRBXPehNY18"
};

export const ContactsList: FC = () => {
    return (
        <div className={styles.contacts}>
            <h2 className="app-section-title">Contacts</h2>
            <div className={styles.contactItem}>
                <span>E-mail</span>
                <a className={styles.emailHref} href={`mailto:${contacts.email}`}>
                    {contacts.email}
                </a>
            </div>
            <div className={styles.contactItem}>
                <span>Phone</span>
                <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
            </div>
            <div className={styles.contactItem}>
                <span>Address</span>
                <a href={contacts.googleMapAddress} target="_blank">
                    {contacts.address}
                </a>
            </div>
        </div>
    );
};
