import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from './tasksSlice';

const Screen2 = ({ navigation }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.list);
  const taskStatus = useSelector(state => state.tasks.status);

  useEffect(() => {
    if (taskStatus === 'idle') {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.task}</Text>
      <TouchableOpacity>
        <Text style={styles.editIcon}>✏️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi Twinkle</Text>
      <Text style={styles.subGreeting}>Have a great day ahead</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#999"
      />

      {/* Khung với chiều cao cố định cho FlatList */}
      <View style={styles.listContainer}>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      {/* Nút dấu cộng ở góc dưới cùng bên phải */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Screen3')}
      >
        <Text style={styles.addIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subGreeting: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000',
  },
  listContainer: {
    height: 650, // Đặt chiều cao cố định cho khung cuộn, khoảng 7 mục
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
    color: '#000',
  },
  editIcon: {
    fontSize: 18,
    color: '#999',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#00bcd4',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    color: '#fff',
    fontSize: 30,
  },
});

export default Screen2;
