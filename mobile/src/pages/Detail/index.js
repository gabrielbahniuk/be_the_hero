import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { incident } = route.params;

  const message = `Hello ${incident.name}, I am getting in contact because I want to help in the case "${incident.title}" with the ammount of ${Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(incident.value)}`;
  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Hero: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+${incident.whatsapp}?&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO:</Text>
        <Text style={styles.incidentValue}>{incident.name} from {incident.city}/{incident.state}</Text>

        <Text style={styles.incidentProperty}>CASE:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Value:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be this case hero's.</Text>

        <Text style={styles.heroDescription}>Get in contact:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
