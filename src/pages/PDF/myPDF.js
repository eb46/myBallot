import React, { useContext } from 'react';
import { DataContext } from "../../App";
import { Page, Text, View, Document, StyleSheet, Image, Font, PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    viewer: {
        width: '90%',
        height: '100vh',
        paddingTop: '10px'
    }
  });




function MyDocument({ballot}) {
    console.log('ballot in myPDF', ballot)
return(
  <Document>
    <Page size="A4">
         <View className="catCard">
            <Text>Federal Candidates</Text>
            {ballot.FederalCandidates.map((candidate) => (
              <View className="infoCard">
                <Text className="position">{candidate.position}</Text>
                <Text className="name">{candidate.name}</Text>
              </View>
            ))}
          </View>
    </Page>
  </Document>
)};

  const ViewPDF = ()=>{
        const { ballot, setBallot } = useContext(DataContext);

      return(
        <PDFViewer style={styles.viewer}>
            <MyDocument ballot={ballot}/>
        </PDFViewer>
      )

  }
  

  
  

export default ViewPDF
