import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import Dialog from "react-native-dialog";
import DialogInput from 'react-native-dialog/lib/Input';
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.flatListItem, textColor]}>{item.text}</Text>
  </TouchableOpacity>
);

const MonApp = () => {
   const [monChoix, setMonChoix] = useState(null);
   const [modifText, onChangeModifText] = useState("d")

  const [visible, setVisible] = useState(false);
  const [motTemp, setMotTemp] = useState('');
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const showDialog = () => {
    setVisible(true);
  };

  const annulerMot = () => {
    setVisible(false);
  };

  const ajouterMot = () => {
    setVisible(false);
    setData(listActuelle => [...listActuelle, {id: data.length.toString(), text: motTemp}]);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#696969" : "lightsteelblue";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setMonChoix(item.id);
          onChangeModifText(data[item.id].text);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

const [visibleM, setVisibleM] = useState(false);

const showDialogM = () => {
  setVisibleM(true);
};

const annulerMotM = () => {
  setVisibleM(false);
};

const modifierMot = () => {
 
  data[monChoix].text = modifText;
  setData(data);
  setVisibleM(false);
};


const [visibleR, setVisibleR] = useState(false);

const showDialogR = () => {
  setVisibleR(true);
};

const annulerMotR = () => {
  setVisibleR(false);
};

const retirerMot = () => {
  data[monChoix].text = '';
  setData(data);
  setVisibleR(false);
};

  return(
    <View style={styles.principal}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Projet Tchana SJP5</Text>
      </View>


      <View style={styles.body}>
        <View style={styles.left}>
          <View style={[styles.textContent, {borderColor: 'black',}]}>

          </View>

          <View style={styles.btnContent}>

            <View style={styles.btnView}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 30, color: 'red'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 30, color: 'red'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton retirer*/}
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 30, color: 'red'}}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.center}>
          <View style={styles.centerBtnView1}>
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 30, color: 'red'}}>{">>"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.centerBtnView2}>
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 30, color: 'red'}}>{"<<"}</Text>
              </TouchableOpacity>
            </View>

        </View>

        <View style={styles.right}>
          <View style={[styles.textContent, {borderColor: 'black',}, styles.flatListContainer]}>
            <FlatList
              data={data}
              renderItem={renderItem}
            />
          </View>

          <View style={styles.btnContent}>

            <View style={styles.btnView}>
              <TouchableOpacity onPress={showDialog}>
                <Text style={{fontSize: 30, color: 'red'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity onPress={showDialogM}>
                <Text style={{fontSize: 30, color: 'red'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity onPress={showDialogR}>
                <Text style={{fontSize: 30, color: 'red'}}>-</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>


      <Dialog.Container visible={visible}>
        <Dialog.Title>Entrer un mot</Dialog.Title>
        <Dialog.Description>
          Ajouter votre mot ici.
        </Dialog.Description>
        <DialogInput 
          placeholder="votre mot ici!"
          onChangeText = {setMotTemp}
        />
        <Dialog.Button label="Annuler" onPress={annulerMot} />
        <Dialog.Button label="Ajouter" onPress={ajouterMot} />
      </Dialog.Container>


    <Dialog.Container visible={visibleM}>
        <Dialog.Title>Modifier un mot</Dialog.Title>
        <Dialog.Description>
          Modifier votre mot ici.
        </Dialog.Description>
        <DialogInput 
          // placeholder="votre mot ici!"
          onChangeText = {onChangeModifText}
          value={modifText}
        />
        <Dialog.Button label="Annuler" onPress={annulerMotM} />
        <Dialog.Button label="Modifier" onPress={modifierMot} />
    </Dialog.Container>

    <Dialog.Container visible={visibleR}>
        <Dialog.Title>Modifier un mot</Dialog.Title>
        <Dialog.Description>
          Voulez vous vraiment supprimer ce mot?
        </Dialog.Description>
        <Dialog.Button label="Non" onPress={annulerMotR} />
        <Dialog.Button label="OUi" onPress={retirerMot} />
    </Dialog.Container>
    </View>
  );
}


const styles = StyleSheet.create({


  principal: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'white',
    flexDirection: "column"
  },

  header: {

  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center"
  },

  body: {
    flex: 8,
    flexDirection: "row",
  },
  right:{
    flex: 5,
    height: 500,
    backgroundColor: 'blue'
  },
  center: {
    flex: 1.5,
  },
  left: {
    flex: 5,
    height: 500,
    backgroundColor: 'green'
  },
  flatListItem: {
    padding: 10,
    fontSize: 15,
    height: 44,
  },

  textContent:{
    flex: 8,
    borderWidth: 2,
  },
  btnContent:{
    flex: 1,
    marginTop: 1,
    flexDirection: 'row'
  },
  btnView:{
    flex: 1,
    borderWidth: 1,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },
  centerBtnView1:{
    borderWidth: 1,
    margin: 1,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },
  centerBtnView2:{
    borderWidth: 1,
    margin: 1,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },
  item: {
    marginVertical: 1,
    marginHorizontal: 1,
  },

  footer: {
    flex: 0.8,
    paddingTop: 5,
    paddingLeft: 5,
  },
  message: {
    fontSize: 10,
    color: 'black',
  },

});

export default MonApp;