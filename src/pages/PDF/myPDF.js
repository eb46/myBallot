import React, { useContext } from 'react';
import { DataContext } from "../../App";
import { Page, Text, View, Document, StyleSheet, Image, Font, PDFViewer } from '@react-pdf/renderer';

import dklogo from "../../images/testpng.png";

const styles = StyleSheet.create({
    page: {
      margin: "25 0"
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
    },
    image: {
      width: '100',
      margin: '25 25',
    },
    category: {
      margin: "25 25",
      fontSize: 18,
      fontWeight: 'bold',
      textDecoration: 'underline'
    },
    candidateCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#E4E4E4',
      color: 'black',
      fontSize: 14,
      padding: 10,
      margin: "5 60",
    },
    positionTitle: {
      color: 'black',
      fontWeight: 'bold'
    },
    candidateName: {
      color: '#518E71',
    }
  });




function MyDocument({ballot}) {
    console.log('ballot in myPDF', ballot)
return(
  <Document>
    <Page style={styles.page} size="A4">
        <Image style={styles.image} src={dklogo} alt="myBallot logo"/>
        <View className="catCard">
          <Text style={styles.category}>Federal Candidates</Text>
          {ballot.FederalCandidates.map((candidate) => (
            <View style={styles.candidateCard} className="infoCard">
              <Text style={styles.positionTitle} className="position">{candidate.position}</Text>
              <Text style={styles.candidateName} className="name">{candidate.name}</Text>
            </View>
          ))}
        </View>
        <View className="catCard">
          <Text style={styles.category}>Judicial Candidates</Text>
          {ballot.JudicialCandidates.map((candidate) => (
            <View style={styles.candidateCard} className="infoCard">
              <Text style={styles.positionTitle} className="position">{candidate.position}</Text>
              <Text style={styles.candidateName} className="name">{candidate.name}</Text>
            </View>
          ))}
        </View>
        <View className="catCard">
          <Text style={styles.category}>Legislative Candidates</Text>
          {ballot.LegislativeCandidates.map((candidate) => (
            <View style={styles.candidateCard} className="infoCard">
              <Text style={styles.positionTitle} className="position">{candidate.position}</Text>
              <Text style={styles.candidateName} className="name">{candidate.name}</Text>
            </View>
          ))}
        </View>
        <View className="catCard">
          <Text style={styles.category}>Statewide Candidates</Text>
          {ballot.StatewideCandidates.map((candidate) => (
            <View style={styles.candidateCard} className="infoCard">
              <Text style={styles.positionTitle} className="position">{candidate.position}</Text>
              <Text style={styles.candidateName} className="name">{candidate.name}</Text>
            </View>
          ))}
        </View>
        <View className="catCard">
          <Text style={styles.category}>Measures</Text>
          {ballot.Measures.map((candidate) => (
            <View style={styles.candidateCard} className="infoCard">
              <Text style={styles.positionTitle} className="position">{candidate.position}</Text>
              <Text style={styles.candidateName} className="name">{candidate.name}</Text>
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
