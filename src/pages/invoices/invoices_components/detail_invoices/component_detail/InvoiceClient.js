import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
});


const BillTo = ({ invoice }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Untuk :</Text>
        <Text>{invoice.klien}</Text>
        <Text>{invoice.alamat_pembeli}</Text>
        <Text>{invoice.no_hp_pembeli}</Text>
        <Text>{invoice.email_pembeli}</Text>
    </View>
);

export default BillTo