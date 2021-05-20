/* eslint-disable prettier/prettier */
import React from 'react'
import { View , Text , FlatList , TouchableOpacity } from 'react-native'
import { Container , Content , Item , Input } from 'native-base'
import styles from '../components/AllStyles'
import StockIndices from '../hooks/StockIndices'
import axios from 'axios'
import { ScrollView } from 'react-native'

let details;

const IndicesData = (props) => {
    const [knowIndex,setIndex] = React.useState("");
    const [knowStock,setStock] = React.useState([]);
    const [stockIdentifier,setStockIdentifier] = React.useState("");
    const [tap,setTap] = React.useState("");
    const [open,setOpen] = React.useState(false);

    const getStockData = () => {
        
        axios.get(
            `https://latest-stock-price.p.rapidapi.com/price`,
            {
                params: {
                    Indices:knowIndex,
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
            setStock(details);
            console.log(knowStock,stockIdentifier);
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Container style={styles.themeStyler}>
            <Content>
                <View>
                    <StockIndices knowIndex={knowIndex} setIndex={setIndex} />
                    <Item>
                        <Input
                        placeholder="Enter Stock Identifier (Optional)"
                        placeholderTextColor='#5EFCA8'
                        style={styles.PickerStyle}
                        onChangeText={(text) => setStockIdentifier(text)}
                        />
                    </Item>
                </View>
                <View>
                    <TouchableOpacity style={styles.ButtonStyle} onPress={() => getStockData()}>
                        <Text style={styles.ButtonText}> Get Stock Data </Text>
                    </TouchableOpacity>
                </View>
                {
                    knowStock.length != 0 ?
                    <ScrollView horizontal>
                        <ScrollView nestedScrollEnabled>
                        <FlatList
                         data={knowStock}
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
                    :
                    null
                }
            </Content>
        </Container>
    )
}

export default IndicesData;