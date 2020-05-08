
# react-native-hms

A React Native wrapper for Huawei Mobile Services

This wrapper includes;
* HMS PushKit
* HMS AnalyticsKit
* HMS MapKit

## Getting started

`$ npm install @el173/react-native-hms --save`

### Mostly automatic installation

`$ react-native link @el173/react-native-hms`

### Add the AppGallery Connect service dependencies

* Add the Maven repository address and AppGallery Connect service dependencies in the build.gradle file of your project.

```gradle
maven {url 'https://developer.huawei.com/repo/'}
classpath 'com.huawei.agconnect:agcp:1.2.1.301'
```

* Add the plug-in configuration and SDK version in the build.gradle file in the app directory.

```gradle
apply plugin: 'com.huawei.agconnect'
implementation 'com.huawei.hms:hianalytics:4.0.1.300'
```

### Manual installation

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.el173.HmsPackage;` to the imports at the top of the file
  - Add `new HmsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```gradle
  	include ':@el173_react-native-hms'
  	project(':@el173_react-native-hms').projectDir = new File(rootProject.projectDir,'../node_modules/@el173/react-native-hms/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```gradle
      implementation project(':@el173_react-native-hms')
  	```

## SDK Configuration

### Huawei Developer Console

1. You need to sign up with a Huawei Developer Account. [https://developer.huawei.com/consumer/en/](https://developer.huawei.com/consumer/en/)
2. Then setup of your app. [The guide here](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#0).
3. To configure the app you will need to get `agconnect-services.json` configuration file.
4. Add the `agconnect-services.json` file to your `android/app` directory.

## HMS Analytics Kit

### Integration Preparations
*   https://developer.huawei.com/consumer/en/codelab/HMSAnalyticsKit/index.html#2

### SDK Permissions for HMS Analytics Kit

* HUAWEI Analytics Kit requires the following permissions, which have been preset in HUAWEI Analytics Kit. You do not need to apply for permissions.

```xml
<!--Network permission -->
<uses-permission android:name="android.permission.INTERNET" />
＜!-- Check the network status. --＞
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<!--AppGallery channel number query permission. -->
<uses-permission android:name="com.huawei.appmarket.service.commondata.permission.GET_COMMON_DATA" />
```

### Proguard Rules
* Before building the APK, configure obfuscation scripts to prevent HUAWEI Analytics Kit from being obfuscated. If obfuscation arises, HUAWEI Analytics Kit may not function properly.

```pro
# exclude HUAWEI Analytics Kit from obfuscation
-keep class com.hianalytics.android.**{*;}
-keep class com.huawei.updatesdk.**{*;}
-keep class com.huawei.hms.**{*;}
-keep interface com.huawei.hms.analytics.type.HAEventType{*;}
-keep interface com.huawei.hms.analytics.type.HAParamType{*;}
-keep class com.huawei.hianalytics.CommonUtil{*;}
-keep class com.huawei.hianalytics.HaInterfaceModule{*;}
-keep class com.huawei.hianalytics.HaInterfacePackage{*;}
-keep class com.huawei.hianalytics.HaSdkInitProvider{*;}
-keep class com.huawei.hianalytics.LifeCycleListener{*;}
```

## Usage
```javascript
// TODO: What to do with the module?
```
  
  https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/location-preparation
