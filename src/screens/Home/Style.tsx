import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    flexDirection:'column',
    borderColor: '#ffffff',
    borderWidth:2,
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:60,
    paddingTop:20,
    paddingBottom:10,
    backgroundColor:'white'
  },
  inputContainer:{
    width:'80%',
    flexDirection:'column',
    alignItems:'center',
  }

});

export default styles