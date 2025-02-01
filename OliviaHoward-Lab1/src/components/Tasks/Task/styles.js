import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",       
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: 10,
        marginLeft:10,
        marginRight:10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 2.5,
        backgroundColor: '#FED766',
    
    },
    text: {
        fontWeight: 'bold',
        fontSize:16,
    }
});

export default styles;