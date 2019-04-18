import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import CardSection  from './common/CardSection';
import * as actions from '../actions';

class ListItem extends React.Component {
    constructor(props){
        super(props);
    }

    renderDescription() {
        const { library, selectedLibraryId } = this.props;

        if ( library.item.id === selectedLibraryId) {
            return (
                <Text style={styles.textDescription}> {library.item.description}</Text>
            )
        }
    }

    render() {
        const { id, title } = this.props.library.item;
        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}  

const styles = { 
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        color: '#000'
    },
    textDescription: {
        fontSize: 15,
        paddingLeft: 18,
        paddingRight: 18,
        backgroundColor: '#fff',
    }
}

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem);
