import React from 'react';
import { 
    Text, 
    TouchableWithoutFeedback,
    View,
    LayoutAnimation,
    UIManager
} from 'react-native';
import { connect } from 'react-redux';
import CardSection  from './common/CardSection';
import * as actions from '../actions';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;
        console.log('expanded', expanded, library);
        if (expanded) {
            return (
                <CardSection>
                    <Text style={styles.textDescription}> 
                        {library.item.description}
                    </Text>
                </CardSection>
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;

    return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem);
