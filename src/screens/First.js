/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View , Text , ImageBackground , Image , TouchableOpacity } from 'react-native'
import { Container , Content } from 'native-base';
import styles from '../components/AllStyles'

const First = ({routes,navigation}) => {
    return (
        <Container>
            <Content>
                <ImageBackground
                style={styles.backgroundImageStyle}
                imageStyle={{opacity:0.6}}
                source={require('../../assets/images/bull.jpg')}>
                    <View style={styles.BoxesContainer}>
                        <View style={styles.Box}>
                            <TouchableOpacity onPress={() => navigation.navigate('Features')}>
                            <Image
                                style={styles.IconStyle}
                                source={require('../../assets/images/graph.jpg')}
                            />
                            </TouchableOpacity>
                            <Text style={styles.TitleStyle}>MONITOR ALL</Text>
                            </View>

                        <View style={styles.Box}>
                        <TouchableOpacity onPress={() => navigation.navigate('Search by NSE group')}>
                            <Image
                                style={styles.IconStyle}
                                source={require('../../assets/images/stock.jpg')}
                            />
                            </TouchableOpacity>
                            <Text style={styles.TitleStyle}> MONITOR BY INDEX </Text>
                            </View>
                    </View>
                </ImageBackground>
            </Content>
        </Container>
    )
}

export default First;
