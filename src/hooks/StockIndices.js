/* eslint-disable prettier/prettier */
import React from 'react'
import { Picker , Form , Item , Icon} from 'native-base'
import styles from '../components/AllStyles';

const StockIndices = ({knowIndex,setIndex}) => {
    return (
                    <Form  style={styles.themeStyler}>
                        <Item>
                            <Icon type="Entypo" name="area-graph" />
                            <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={styles.PickerStyle}
                            selectedValue={knowIndex}
                            onValueChange={value => setIndex(value)}
                            >
                                <Picker.Item label="Pick a Stock Index" value="" />
                                <Picker.Item label="NIFTY 50" value="NIFTY 50" />
                                <Picker.Item label="NIFTY NEXT 50" value="NIFTY NEXT 50" />
                                <Picker.Item label="NIFTY 100" value="NIFTY 100" />
                                <Picker.Item label="NIFTY 200" value="NIFTY 200" />
                                <Picker.Item label="NIFTY MIDCAP 50" value="NIFTY MIDCAP 50" />
                                <Picker.Item label="NIFTY 100" value="NIFTY 100" />
                                <Picker.Item label="NIFTY MIDCAP 150" value="NIFTY MIDCAP 150" />
                                <Picker.Item label="NIFTY SMLCAP 50" value="NIFTY SMLCAP 50" />
                                <Picker.Item label="NIFTY SMLCAP 100" value="NIFTY SMLCAP 100" />
                                <Picker.Item label="NIFTY SMLCAP 250" value="NIFTY SMLCAP 250" />
                                <Picker.Item label="NIFTY MIDSML 400" value="NIFTY MIDSML 400" />
                                <Picker.Item label="NIFTY BANK" value="NIFTY BANK" />
                                <Picker.Item label="NIFTY AUTO" value="NIFTY AUTO" />
                                <Picker.Item label="NIFTY FINSRV25 50" value="NIFTY FINSRV25 50" />
                                <Picker.Item label="NIFTY FIN SERVICE" value="NIFTY FIN SERVICE" />
                                <Picker.Item label="NIFTY FMCG" value="NIFTY FMCG" />
                                <Picker.Item label="NIFTY IT" value="NIFTY IT" />
                                <Picker.Item label="NIFTY MEDIA" value="NIFTY MEDIA" />
                                <Picker.Item label="NIFTY METAL" value="NIFTY METAL" />
                                <Picker.Item label="NIFTY INFRA" value="NIFTY INFRA" />
                                <Picker.Item label="NIFTY ENERGY" value="NIFTY ENERGY" />
                                <Picker.Item label="NIFTY PHARMA" value="NIFTY PHARMA" />
                                <Picker.Item label="NIFTY PSU BANK" value="NIFTY PSU BANK" />
                                <Picker.Item label="NIFTY PVT BANK" value="NIFTY PVT BANK" />
                                <Picker.Item label="NIFTY REALTY" value="NIFTY REALTY" />
                                <Picker.Item label="NIFTY MNC" value="NIFTY MNC" />
                                <Picker.Item label="NIFTY PSE" value="NIFTY PSE" />
                                <Picker.Item label="NIFTY SERV SECTOR" value="NIFTY SERV SECTOR" />
                            </Picker>
                        </Item>
                    </Form>
    )
}
export default StockIndices;
