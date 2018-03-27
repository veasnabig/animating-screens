import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const datas = [
    {
        id: '001',
        name: 'A001'
    },
    {
        id: '002',
        name: 'A002'
    },
    {
        id: '003',
        name: 'A003'
    },
    {
        id: '004',
        name: 'A004'
    },
    {
        id: '005',
        name: 'A005'
    },
    {
        id: '006',
        name: 'A006'
    },
    {
        id: '007',
        name: 'A007'
    },
    {
        id: '008',
        name: 'A008'
    },
    {
        id: '009',
        name: 'A009'
    },
]

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectItem: null,
            opacityOfSelectedItem: 1,
            opacityOfNotSelectedItem: 1,
            selectedItemZindex: 0,
            backgroundColor:'#dfe4ea'
        }
    }
    onListItemPassed = item => {
        const { onItemPress } = this.props;
        this.setState({ selectItem: item });
        this.setState({ opacityOfNotSelectedItem: 0 });
        this.setState({ opacityOfSelectedItem: 0 });
        this.setState({ selectedItemZindex: 1 });
        this.setState({backgroundColor:'#fff'})
        onItemPress(item);
    }
    renderItem = (item) => {
        const { opacityOfSelectedItem, opacityOfNotSelectedItem, selectedItemZindex,backgroundColor } = this.state;
        const { selectItem } = this.props;
        const selected = selectItem && selectItem.name;
        console.log(item)
        return datas.map((o, k) => {
            return (
                <View style={{ flex: 1, }} key={k}>
                    <TouchableOpacity
                        key={k}
                        style={[styles.list, { opacity: opacityOfSelectedItem }]}
                        onPress={() => this.onListItemPassed(o)}
                    >
                        <View style={{ flex: 1 }}>
                            <Text>{o.id}</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text>{o.name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.renderItem()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#dfe4ea',
        margin: 3,
        padding: 20
    }
});
