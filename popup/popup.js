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
      toggleSwitchInner1.style.transform = "translateX(100%)";
    } else {
      toggleSwitchLabel1.style.backgroundColor = "#120b48";
      toggleSwitchLabel1.style.borderColor = "#120b48";
      toggleSwitchInner1.style.transform = "translateX(0)";
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
      toggleSwitchInner2.style.transform = "translateX(100%)";
    } else {
      toggleSwitchLabel2.style.backgroundColor = "#120b48";
      toggleSwitchLabel2.style.borderColor = "#120b48";
      toggleSwitchInner2.style.transform = "translateX(0)";
    }
  });
});
