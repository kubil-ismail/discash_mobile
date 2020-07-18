/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Text, Image } from 'react-native-elements';

import banner from '../../assets/banner/1.jpg';

export default class promo extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.center}>
            <Image
              source={banner}
              style={styles.banner}
              resizeMode="contain"
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text h4 style={styles.txtCenter}>Berbagi Berkah MyPertamina Pake LinkAja</Text>
            <Text style={styles.txtCenter}>
              Syarat & Ketentuan

              Promo hanya berlaku untuk pembelian melalui aplikasi My Pertamina menggunakan LinkAja
              Promo berlaku di SPBU yang berpartisipasi, syarat & ketentuan lebih lanjut cek di sini
              Periode promo 1 Februari – 31 Juli 2021
              LinkAja dapat menggugurkan hak pengguna apabila ditemukan tindakan yang dianggap oleh LinkAja sebagai penyalahgunaan, kecurangan dan atau transaksi mencurigakan lainnya
              Promo dapat berubah atau berhenti sewaktu-waktu sesuai dengan kebijakan perusahaan, yang akan diinfokan terlebih dahulu melalui website www.linkaja.id

            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  txtCenter: {
    textAlign: 'left',
    marginBottom: 10,
  },
  center: {
    alignItems: 'center',
    padding: 20,
  },
  banner: {
    width: 250,
    height: 200,
  },
});
