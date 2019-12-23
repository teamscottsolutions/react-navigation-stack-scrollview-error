# Broken ScrollView with react-navigation

This repository exploits a bug found when attempting to navigate to screens using `ScrollView` in `react-native-web`. Using a series of steps, the `ScrollView` will eventually stop allowing users to scroll through content.

## Setup

* Expo 36, Web
* React Navigation 4
* Hardware device running iOS 12, Chrome or Safari browser (i.e. iPad 2, iPhone 6/7/8, etc)
  * Some, but not all, Android devices may also display this behavior
  * Running in a browser on a computer does not demonstrate the bug, must be on device

All I did was:

* Run `expo init`
* Choose the "tabs" template when prompted
* Changed the Settings tab to use a ScrollView with a Button to navigate via `StackNavigator`

## Behavior

A `ScrollView`, or its derivatives, such as `FlatList`, will fail to scroll after a navigation action via `StackNavigator`. The steps to reproduce this, based on this codebase, are as follows:

For "broken" tabs:

* Click the tab to get started
* Notice that you can scroll up and down the page
* Click the button to navigate via `StackNavigator` action to a new screen
  * It's the same screen, but pushed onto the stack
* Click the back arrow to navigate back
* Attempt to scroll up and down the page
* Notice that you can no longer scroll the ScrollView; the device attempts to scroll the entire page.

For "fixed" tabs:

* Click the tab to get started
* Notice that you can scroll up and down the page
* Click the button to navigate via `StackNavigator` action to a new screen
  * It's the same screen, but pushed onto the stack
* Click the back arrow to navigate back
* Notice that you can scroll up and down the page

## Other Observations

All tabs, both "fixed" and "broken" variants, do not display the broken behavior when navigating via `BottomTabNavigator` -- changing tabs does not break the scroll.

This issue is also "fixed" by pressing the `TouchableOpacity` component just enough to register a touch event, but not enough for a press (i.e. slide your finger off the button). This seems to return focus to the screen. Now, scrolling is restored.

The "ScrollView (broken)" version loses the ability to scroll immediately after pressing the nav button, even before navigating back. The "FlatList (broken)" version will continue to allow scrolling on the newly-pushed screen; it only breaks once you navigate back.

The "ScrollView (fixed)" version loses the ability to scroll immediately after pressing the nav button, though it works fine when navigating back. Only the "FlatList (fixed)" version seems to work perfectly, always allowing scrolling after any navigation action.

## The fix, explained

The "fixed" variants use `withNavigationFocus` to determine if the screen is currently being shown or not. If the screen is not shown, it will return `null`; otherwise, it renders the screen components. This essentially un-mounts and re-mounts the `ScrollView`, forcing it to get a fresh and accurate measurement of the screen and, thus, enables scrolling.

## Final Thoughts

Based on my observations, it seems the issue is in `react-navigation-stack` and the way transitioning between screens is handled. I'm sure there are better alternatives to the provided solution above, and I'd love to hear them, but the idea behind this is to show that there is some action that needs to be taken once focus is restored to the previous screen in the stack. It seems that `BottomTabNavigator` does this somehow, but `StackNavigator` does not.

I imagine if the `isFocused` prop could be used to tell `ScrollView` to recalculate it's height or something, this may be a more performant alternative to just re-drawing the entire component.
