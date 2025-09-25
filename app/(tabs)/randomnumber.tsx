import { useState } from 'react';
import {
    View,             // just like div
    TouchableOpacity, // Button component that responds to touch
    Text,             
    StyleSheet       
} from 'react-native';


const randomNumber = () => {

    // Declare a state variable to store the random number
    const [randomNumber, setRandomNumber] = useState(null);

    const generateRandomNumber = () => {
        const min = 1; 
        const max = 100; 
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(number); // Update state with new random no
    };

    // Render the UI
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Funzz
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={generateRandomNumber}> 
                <Text style={styles.buttonText}>
                    guess a number
                </Text>
            </TouchableOpacity>
            {
                // Conditionally render the random number if it exists
                randomNumber !== null &&
                <Text style={styles.randomNumber}>
                     {randomNumber}
                </Text>
            }
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, // Take full height
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        padding: 20
    },
    button: {
        backgroundColor: '#79124eff',
        paddingHorizontal: 20,
        paddingVertical: 10, 
        borderRadius: 5, // Rounded corners
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',         
        fontSize: 18,
        fontWeight: 'bold',
    },
    randomNumber: {
        fontSize: 24,
        fontWeight: 'bold',       
         color: '#d84199ff' },
    heading: {
        fontSize: 40,
        marginBottom: 20,
        fontStyle: 'italic',
        color: "#f80b95ff",
        fontWeight: 'bold',
    }
});


export default randomNumber;