import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Contact() {
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState([]);
  const [count, setCount] = useState(0);
  const captureTypedContact = (typedContact) => {
    setContactName(typedContact);
  };
  const captureTypedPhone = (typedPhone) => {
    setPhone(typedPhone);
  };
  const addContact = () => {
    setContacts((contacts) => {
      setCount(contact + 1);
      let aux = [{ key: count.toString(), value: contact }, ...contacts];
      setContactName("");
      setPhone("");
      return aux;
    });
  };
  return (
    <View style={styles.principalView}>
      <View>
        <TextInput
          placeholder="Nome"
          style={styles.contactTextInput}
          onChangeText={captureTypedContact}
          value={contactName}
        />
        <TextInput
          placeholder="Telefone"
          style={styles.contactTextInput}
          onChangeText={captureTypedPhone}
          value={phone}
        />
        <Button
          disabled={contactName.length === 0 || phone.length === 0}
          title="Adicionar"
          onPress={addContact}
        />
      </View>
      <FlatList
        data={contacts}
        renderItem={(l) => (
          <View style={styles.listItem}>
            <Text>
              {l.item.value.contactName} - {l.item.value.phone}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  principalView: {
    padding: 30,
  },

  contactTextInput: {
    borderBottomColor: "#303030",
    borderBottomWidth: 0,
    marginBottom: 5,
    padding: 10,
  },

  listItem: {
    padding: 10,
    backgroundColor: "#c5e6ed",
    borderColor: "#303030",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 8,
  },
});
