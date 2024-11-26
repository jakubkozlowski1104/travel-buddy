package com.travelBuddy.helpers;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MessageRequest {
    private String senderUsername;
    private String receiverUsername;
    private Long tripId;
    private String content;
}
