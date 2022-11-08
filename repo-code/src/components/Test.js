import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";

import Colors from "../definitions/Colors";

const CrewMember = ({ firstName, lastName }) => {
  return (
    <View>
      <Text>
        Membre d'équipage {firstName} {lastName} au rapport!
      </Text>
    </View>
  );
};

CrewMember.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

const Test = () => {
  const [crewSize, setCrewSize] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Nouvelle recrue</Text>
        <TextInput placeholder="Entrez votre nom" style={styles.form} />
        <TextInput
          placeholder="Entrez votre prénom"
          style={[styles.form, { marginBottom: 12 }]}
        />
        <Button
          title="Ajouter"
          color={Colors.primary_blue}
          onPress={() => {
            setCrewSize(crewSize + 1);
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Composition de l'équipage ({crewSize})</Text>
        <CrewMember firstName="John" lastName="Doe" />
      </View>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  subContainer: {
    paddingVertical: 16,
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  form: {
    marginBottom: 8,
  },
});
