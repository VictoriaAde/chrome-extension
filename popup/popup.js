document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch1 = document.getElementById("toggle-switch-1");
  const toggleSwitchLabel1 = toggleSwitch1.nextElementSibling;
  const toggleSwitchInner1 = toggleSwitchLabel1.querySelector(
    ".toggle-switch-inner"
  );

  toggleSwitch1.addEventListener("change", function () {
    if (toggleSwitch1.checked) {
      toggleSwitchLabel1.style.backgroundColor = "#120b48";
      toggleSwitchLabel1.style.borderColor = "#120b48";
      toggleSwitchInner1.style.transform = "translateX(0)";
    } else {
      toggleSwitchLabel1.style.backgroundColor = "#120b48";
      toggleSwitchLabel1.style.borderColor = "#120b48";
      toggleSwitchInner1.style.transform = "translateX(100%)";
    }
  });

  const toggleSwitch2 = document.getElementById("toggle-switch-2");
  const toggleSwitchLabel2 = toggleSwitch2.nextElementSibling;
  const toggleSwitchInner2 = toggleSwitchLabel2.querySelector(
    ".toggle-switch-inner"
  );

  toggleSwitch2.addEventListener("change", function () {
    if (toggleSwitch2.checked) {
      toggleSwitchLabel2.style.backgroundColor = "#120b48";
      toggleSwitchLabel2.style.borderColor = "#120b48";
      toggleSwitchInner2.style.transform = "translateX(0)";
    } else {
      toggleSwitchLabel2.style.backgroundColor = "#120b48";
      toggleSwitchLabel2.style.borderColor = "#120b48";
      toggleSwitchInner2.style.transform = "translateX(100%)";
    }
  });
});

// Start Recording Button Click Event
const startRecordingButton = document.querySelector(".start_btn");
startRecordingButton.addEventListener("click", () => {
  // alert("Start Recording button clicked");

  // Create a new tab for the custom notification
  chrome.tabs.create({
    url: chrome.runtime.getURL(
      "permission_notification/permission_notification.html"
    ),
  });
});
// // Start Recording Button Click Event
// const startRecordingButton = document.querySelector(".start_btn");
// startRecordingButton.addEventListener("click", async () => {
//   try {
//     // Check if screen recording is supported
//     if (navigator.mediaDevices.getDisplayMedia) {
//       const stream = await navigator.mediaDevices.getDisplayMedia({
//         video: true,
//       });

//       // You can start screen recording with the 'stream' here

//       // Display a notification asking for permission to record the screen
//       const notificationOptions = {
//         type: "basic",
//         title: "Screen Recording Permission",
//         message: "Do you want to allow this extension to record your screen?",
//         iconUrl: "../assets/icon.png", // Replace with your extension's icon
//         buttons: [
//           { title: "Allow", iconUrl: "../assets/allow.png" }, // Replace with your own icons
//           { title: "Block", iconUrl: "../assets/block.png" }, // Replace with your own icons
//         ],
//       };

//       chrome.notifications.create(
//         "screenRecordingPermission",
//         notificationOptions,
//         function (notificationId) {
//           // Handle button click events from the notification
//           chrome.notifications.onButtonClicked.addListener(function (
//             clickedNotificationId,
//             buttonIndex
//           ) {
//             if (clickedNotificationId === notificationId) {
//               if (buttonIndex === 0) {
//                 // User clicked "Allow," you can proceed with screen recording
//               } else if (buttonIndex === 1) {
//                 // User clicked "Block," handle accordingly
//               }
//               // Close the notification
//               chrome.notifications.clear(notificationId);
//             }
//           });
//         }
//       );
//     } else {
//       alert("Screen recording is not supported in this browser.");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });
