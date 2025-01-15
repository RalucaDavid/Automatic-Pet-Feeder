import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

type FeedingScheduleModalProps = {
    visible: boolean;
    onClose: () => void;
}

export default function FeedingScheduleModal({ visible, onClose }: FeedingScheduleModalProps) {
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);

    const handleConfirm = (time: any) => {
        console.warn("A date has been picked: ", time);

        const adjustedTime = new Date(time);
        adjustedTime.setHours(adjustedTime.getHours() + 2);

        console.warn("A date has been picked: ", adjustedTime);
        setSelectedTime(adjustedTime);
        onClose();
    };

    return (
        <View>
            {Platform.OS !== 'web' && (
                <DateTimePickerModal
                    isVisible={visible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={onClose}
                />
            )}
        </View>
    );
}