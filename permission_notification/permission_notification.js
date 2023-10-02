// Start Recording Button Click Event
const startRecordingButton = document.getElementById("allow_btn");
startRecordingButton.addEventListener("click", async () => {
  try {
    // Check if screen recording is supported
    if (navigator.mediaDevices.getDisplayMedia) {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });

      // You can start screen recording with the 'stream' here

      // Display a notification asking for permission to record the screen
      const notificationOptions = {
        type: "basic",
        title: "Screen Recording Permission",
        message: "Do you want to allow this extension to record your screen?",
        iconUrl: "../assets/icon.png", // Replace with your extension's icon
        buttons: [
          { title: "Allow", iconUrl: "../assets/allow.png" }, // Replace with your own icons
          { title: "Block", iconUrl: "../assets/block.png" }, // Replace with your own icons
        ],
      };

      chrome.notifications.create(
        "screenRecordingPermission",
        notificationOptions,
        function (notificationId) {
          // Handle button click events from the notification
          chrome.notifications.onButtonClicked.addListener(function (
            clickedNotificationId,
            buttonIndex
          ) {
            if (clickedNotificationId === notificationId) {
              if (buttonIndex === 0) {
                // User clicked "Allow," you can proceed with screen recording
              } else if (buttonIndex === 1) {
                // User clicked "Block," handle accordingly
              }
              // Close the notification
              chrome.notifications.clear(notificationId);
            }
          });
        }
      );
    } else {
      alert("Screen recording is not supported in this browser.");
    }
  } catch (error) {
    console.error(error);
  }
});
