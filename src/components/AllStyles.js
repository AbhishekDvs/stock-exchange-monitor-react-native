/* eslint-disable prettier/prettier */
import { Dimensions , StyleSheet } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const background ='#4079C8';
const foreground = '#025B2B';
const foreground2 = '#5EFCA8';
const background2= '#FFD526';

const styles = StyleSheet.create({
    NormalText:{
        fontFamily:'FROSTBITE-Wide Bold',
        fontSize:18,
        color:foreground2,
        padding:10,
        fontWeight:'bold'
    },
    backgroundImageStyle:{
        height:height,
        width:width,
        backgroundColor:'black'
    },
    TitleStyle: {
        fontFamily:'FROSTBITE-Wide Bold',
        fontSize:20,
        color:foreground2,
        fontWeight:'bold',
        margin:10,
        textAlign:'center'
    },
    ButtonStyle:{
        backgroundColor: foreground2,
        margin: 10,
        height:height*0.08,
        width:200,
        alignSelf:'center',
        shadowColor: "#e00026",
        borderRadius:5,
        shadowOffset: {
        width: 0,
        height: 2,
        },
        justifyContent:'space-evenly',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5 
    },
    TouchStyle:{
        backgroundColor: background2,
        height:height*0.06,
        width:width*.90,
        alignSelf:'flex-start',
        shadowColor: "#e00026",
        alignContent:'center',
        borderRadius:5,
        shadowOffset: {
        width: 0,
        height: 2,
        },
        justifyContent:'space-evenly',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5 
    },
    TouchText:{
        fontSize:20,
        color:background,
        margin:8,
        fontWeight:'bold'
    },
    ButtonText:{
        fontSize:20,
        color:background,
        textAlign:'center',
        fontWeight:'bold'
    },
    IconStyle:{
        width:140,
        height:140,
        borderRadius:70,
        borderColor:foreground2,
        borderWidth:5,
        margin:10
    },
    BoxesContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly'
    },
    Box:{
        width:width*0.46,
        marginHorizontal:5,
        marginVertical:height*0.05,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'space-evenly',
      },
      TextBox:{
        margin:5,
        padding:10,
        width:width,
        alignSelf:'center',
        flexWrap:'wrap'
      },
      themeStyler:{
          backgroundColor:background
      },
      PickerStyle:{
          width:undefined,
          color:foreground2
      }
})

export default styles;