/* eslint-disable prettier/prettier */
import React from 'react'
import { View , Text , Image , TouchableOpacity , ScrollView , FlatList } from 'react-native'
import { Container , Content , Input , Item } from 'native-base'
import axios from 'axios'
import styles from '../components/AllStyles'

let details;

const HomeScreen = (props) => {

    const [stockData,setStockData] = React.useState([]);
    const [stockIdentifier,setStockIdentifier] = React.useState("");
    const [open,setOpen] = React.useState(false);
    const [tap,setTap] = React.useState("");

    // React.useEffect(() => {

    //     axios.get(
    //         `https://latest-stock-price.p.rapidapi.com/any`,
    //         {
    //             headers: {
    //                 'Content-Type':'application/json',
    //                 'x-rapidapi-key': 'ff1534a0cfmshb3bc43ca67e3583p1fc781jsn632630c5dd49',
    //                 'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com'
    //             }
    //         }
    //     ).then( res => {
    //         details = JSON.parse(res.request.response);
    //         setStockData(details);
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // })


    const getStockData = () => {
        axios.get(
            `https://latest-stock-price.p.rapidapi.com/any`,
            {
                params: {
                    ...(stockIdentifier!="" ? {Identifier:stockIdentifier}:{})
                },
                headers: {
                    'Content-Type':'application/json',
                    'x-rapidapi-key': 'ff1534a0cfmshb3bc43ca67e3583p1fc781jsn632630c5dd49',
                    'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com'
                }
            }
        ).then( res => {
            details = JSON.parse(res.request.response);
            setStockData(details);
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <Container style={styles.themeStyler}>
            <Content>
                <View>
                    <Item>
                        <Input
                        placeholder="Enter Stock Identifier (Optional)"
                        placeholderTextColor='#5EFCA8'
                        style={styles.PickerStyle}
                        onChangeText={(text) => setStockIdentifier(text)}
                        />
                    </Item>

                    <TouchableOpacity style={styles.ButtonStyle} onPress={() => getStockData()}>
                        <Text style={styles.ButtonText}>Search index </Text>
                    </TouchableOpacity>

                    <ScrollView horizontal>
                        <ScrollView nestedScrollEnabled>
                        <FlatList
                         data={stockData}
                         keyExtractor={item => item.identifier}
                         renderItem={({item}) => {
                             return (
                                 <View style={styles.TextBox}>
                                    <TouchableOpacity
                                        style={styles.TouchStyle}
                                        onPress={() => {
                                            setTap(item.identifier)
                                            if(open==true){
                                                setOpen(false)
                                            } else {
                                                setOpen(true)
                                            }
                                        }}
                                    >
                                          <Text style={styles.TouchText}>{item.symbol}</Text>
                                    </TouchableOpacity>
                                    { tap == item.identifier && open == false ?
                                     <View>
                                        <Text style={styles.NormalText}>Stock Identifier - {item.identifier}</Text>
                                        <Text style={styles.NormalText}>Day open - {item.open}</Text>
                                        <Text style={styles.NormalText}>Day High - {item.dayHigh}</Text>
                                        <Text style={styles.NormalText}>Day Low - {item.dayLow}</Text>
                                        <Text style={styles.NormalText}>Last Price - {item.lastPrice}</Text>
                                        <Text style={styles.NormalText}>Previous Close - {item.previousClose}</Text>
                                        <Text style={styles.NormalText}>Change - {item.change}</Text>
                                        <Text style={styles.NormalText}>pChange - {item.pChange}</Text>
                                        <Text style={styles.NormalText}>Year High - {item.yearHigh}</Text>
                                        <Text style={styles.NormalText}>Year Low - {item.yearLow}</Text>
                                        <Text style={styles.NormalText}>Total Traded Volume - {item.totalTradedVolume}</Text>
                                        <Text style={styles.NormalText}>Total Traded Value - {item.totalTradedValue}</Text>
                                        <Text style={styles.NormalText}>Last updated time - {item.lastUpdateTime}</Text>
                                        <Text style={styles.NormalText}>Per Change 365d - {item.perChange365d}</Text>
                                        <Text style={styles.NormalText}>Per change 30d- {item.perChange30d}</Text>
                                     </View>
                                     :
                                     null
                                     }
                                </View>
                             )
                         }}
                         />
                         </ScrollView>
                    </ScrollView>
                </View>
            </Content>
        </Container>
    )
}

export default HomeScreen;