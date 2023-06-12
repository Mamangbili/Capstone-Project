import React from 'react';
import { PDFViewer, Page, Document, StyleSheet, Text, View, Table, TableCell, TableHeader, TableRow } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    formContainer: {
        marginBottom: 20,
        padding: 10,
        border: '1 solid #FF0000',
        borderRadius: 4,
        backgroundColor: '#D7D7D7',
    },
    formRow: {
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    input: {
        border: '1 solid #000000',
        borderRadius: 2,
        padding: 5,
    },
    table: {
        marginBottom: 20,
        width: '100%',
    },
    tableHeader: {
        backgroundColor: '#C5CED5',
        fontWeight: 'bold',
        padding: 5,
    },
    tableRow: {},
    tableCell: {
        padding: 5,
    },
    button: {
        backgroundColor: '#C5CED5',
        padding: 10,
        borderRadius: 4,
        textAlign: 'center',
    },
});

const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.title}>FORM PEMBUATAN INVOICES</Text>
                <View style={styles.formContainer}>
                    <View style={styles.formRow}>
                        <Text style={styles.label}>Nama Penagih :</Text>
                        <Text style={styles.input}>[Insert Name Penagih]</Text>
                    </View>
                    <Table style={styles.table}>
                        <TableHeader>
                            <TableCell>Tagihan untuk</TableCell>
                        </TableHeader>
                        <TableRow>
                            <TableCell>Nama</TableCell>
                            <TableCell>:</TableCell>
                            <TableCell>
                                <Text style={styles.input}>[Insert Nama]</Text>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Alamat</TableCell>
                            <TableCell>:</TableCell>
                            <TableCell>
                                <Text style={styles.input}>[Insert Alamat]</Text>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>No Hp</TableCell>
                            <TableCell>:</TableCell>
                            <TableCell>
                                <Text style={styles.input}>[Insert No Hp]</Text>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>:</TableCell>
                            <TableCell>
                                <Text style={styles.input}>[Insert Email]</Text>
                            </TableCell>
                        </TableRow>
                    </Table>
                    <View style={styles.formRow}>
                        <Text style={styles.label}>Metode Pembayaran :</Text>
                        <Text style={styles.input}>[Insert Metode Pembayaran]</Text>
                    </View>
                    <View style={styles.button}>
                        <Text>Tambah Produk</Text>
                    </View>
                </View>
                <Table style={styles.table}>
                    <TableHeader>
                        <TableCell>Produk</TableCell>
                        <TableCell>Deskripsi</TableCell>
                        <TableCell>Harga</TableCell>
                        <TableCell>Jumlah</TableCell>
                        <TableCell>Harga Total</TableCell>
                        <TableCell>-</TableCell>
                    </TableHeader>
                    <TableRow>
                        <TableCell>[Insert Produk]</TableCell>
                        <TableCell>[Insert Deskripsi]</TableCell>
                        <TableCell>[Insert Harga]</TableCell>
                        <TableCell>[Insert Jumlah]</TableCell>
                        <TableCell>[Insert Harga Total]</TableCell>
                        <TableCell>
                            <Text style={styles.button}>X</Text>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={4}>Total Pembelian</TableCell>
                        <TableCell>[Insert Total Pembelian]</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </Table>
                <View style={styles.button}>
                    <Text>Kirim</Text>
                </View>
            </View>
        </Page>
    </Document>
);

const PDFGenerator = () => (
    <PDFViewer>
        <MyDocument />
    </PDFViewer>
);

export default PDFGenerator;
