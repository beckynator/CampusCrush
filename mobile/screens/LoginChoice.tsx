import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const LoginChoice = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Let's you in</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Image source={require("./facebook-icon.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Image source={require("./google-icon.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Image source={require("./apple-icon.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Apple</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.passwordButton}>
        <Text style={styles.passwordButtonText}>Sign in with password</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C2C2C",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  orText: {
    color: "white",
    textAlign: "center",
    marginVertical: 20,
  },
  passwordButton: {
    backgroundColor: "#FF5A5F",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  passwordButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    color: "white",
  },
  signupLink: {
    color: "#FF5A5F",
    fontWeight: "bold",
  },
});

export default LoginChoice;
