import { Picker } from "@react-native-picker/picker";

const OrderPicker = ({ selectedOrder, setSelectedOrder }) => {
  return (
    <Picker
      style={{ marginHorizontal: 10, padding: 10 }}
      itemStyle={{ height: 50 }}
      selectedValue={selectedOrder}
      onValueChange={(itemValue) => setSelectedOrder(itemValue)}
    >
      <Picker.Item label="Latest repositories" value="DEFAULT" />
      <Picker.Item label="Highest rated repositories" value="DESC" />
      <Picker.Item label="Lowest rated repositories" value="ASC" />
    </Picker>
  );
};

export default OrderPicker;
