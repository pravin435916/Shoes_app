import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const notify = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, backgroundColor: '#F3F4F6' }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <FontAwesome name="arrow-left" size={24} color="black" />
          <Text style={styles.headerTitle}>NOTIFICATION</Text>
          <TouchableOpacity>
            <Text style={styles.markAsRead}>Mask as read <FontAwesome name="check" size={16} color="#F97316" /></Text>
          </TouchableOpacity>
        </View>

        {/* Notifications */}
        <NotificationItem
          time="Today, 10:20"
          title="LIMITED-TIME PROMO - UP TO 50% OFF!"
          description="Don't miss out on this special opportunity! Get up to 50% off on all our sports shoes. Check out our latest collection now!"
        />

        <NotificationItem
          time="Today, 09:05"
          title="FLASH SALE ALERT - SAVE BIG TODAY!"
          description="Hurry, our flash sale is live now! Grab your favorite sports shoes at unbeatable prices. This offer won't last long!"
        />

        <NotificationItem
          time="Yesterday, 08:10"
          title="GOOD MORNING, RUNNER!"
          description="It's time to step out and run. Give your best to your body today. Find comfort in every step."
        />

        <NotificationItem
          time="July 13, 2023, 17:30"
          title="EXCLUSIVE DISCOUNT JUST FOR YOU"
          description="Hello loyal customers! We want to reward you with an exclusive 15% discount on all our shoe products. Use the code 'EXCLUSIVE15' at checkout."
        />
      </View>
    </ScrollView>
  );
};

const NotificationItem = ({ time, title, description }) => (
  <View style={styles.notificationContainer}>
    <View style={styles.notificationIcon} />
    <View style={styles.notificationContent}>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const styles = {
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#E5E7EB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  markAsRead: {
    color: '#F97316',
    fontWeight: '600',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#FFFBEB',
  },
  notificationIcon: {
    width: 8,
    height: 8,
    backgroundColor: '#F97316',
    borderRadius: 4,
    marginTop: 8,
    marginRight: 8,
  },
  notificationContent: {
    flex: 1,
  },
  time: {
    fontSize: 12,
    color: '#6B7280',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
  },
};

export default notify;
