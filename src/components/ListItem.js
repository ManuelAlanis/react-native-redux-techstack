import React from 'react';
import { Text } from 'react-native';
import CardSection  from './common/CardSection';
 
class ListItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <CardSection title={this.props.library.title}>
                <Text style={styles.titleStyle}>
                    {this.props.library.item.title}
                </Text>
            </CardSection>
        );
    }
}

const styles = { 
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        color: '#000'
    }
}

export default ListItem;
