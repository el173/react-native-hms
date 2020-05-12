
# react-native-hms

A React Native wrapper for Huawei Mobile Services

This wrapper includes;
* HMS AnalyticsKit
* HMS MapKit
* HMS PushKit

## 🤔🤔🤔<span style="color:red">Looking for Contributors</span>🤔🤔🤔

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
-keep class com.el173.analytics.**{*;}
-keep interface com.huawei.hms.analytics.type.HAEventType{*;}
-keep interface com.huawei.hms.analytics.type.HAParamType{*;}
-keep class com.huawei.hianalytics.CommonUtil{*;}
-keep class com.huawei.hianalytics.HaInterfaceModule{*;}
-keep class com.huawei.hianalytics.HaInterfacePackage{*;}
-keep class com.huawei.hianalytics.HaSdkInitProvider{*;}
-keep class com.huawei.hianalytics.LifeCycleListener{*;}
```

## HMS Map Kit

### Adding Permissions

* To obtain the current device location, you need to add the following permissions in the AndroidManifest.xml file. In Android 6.0 and later, you need to apply for these permissions dynamically.

```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
```

* Import the following class to the MainApplication.java file of your project.

```java
import com.el173.map.HMSMapsPackage;
```

* Then add the following line to your getPackages method.
```java
packages.add(new HMSMapsPackage());
```

### Proguard Rules

```pro
-ignorewarnings
-keepattributes *Annotation*
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes Signature
-keepattributes SourceFile,LineNumberTable
-keep class com.hianalytics.android.**{*;}
-keep class com.huawei.updatesdk.**{*;}
-keep class com.el173.analytics.**{*;}
```

## Usage

* Check HMS/GMS Availability
```javascript
import HMS from '@el173/react-native-hms';

isGMS = async () => {
	const isGMS = await HMS.Utils.isGMSAvailable();
	console.log('Your device is running on Google Mobile Services', isGMS);
	return isGMS;
};

isHMS = async () => {
	const isHMS = await HMS.Utils.isHMSAvailable();
	console.log('Your device is running on Huawei Mobile Services', isHMS);
	return isHMS;
};

```

* Analytics Kit
```javascript
import HMS from '@el173/react-native-hms';

setHmsEvent = () => {
	const eventObj={
		testString:'StrContent',
		testInt:20,
		testDouble:2.2,
		testBoolean:false
	}
  	HMS.Analytics.onEvent('newTestEvent',eventObj);
}
```
 
Read more about HMS analytics: https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/react-native-development

* MapKit

```javascript
import HMS from '@el173/react-native-hms';

const MapView = HMS.MapView;

<MapView
    initialRegion={{
        latitude: 37.78825,
        longitude:  -122.4324,
        latitudeDelta:  0.0922,
        longitudeDelta:  0.0421,
    }}
/>

```

Import other available [map components](https://developer.huawei.com/consumer/en/doc/development/HMS-References/hms-map-v4-sdkoverview-rn)

```javascript
import {Marker, Polyline, ...} from '@el173/react-native-hms';
```

* Push Kit

```javascript
import HMS from '@el173/react-native-hms';

getToken = () => {
	HMS.InstanceId.getToken( 
		(retcode, token) => { 
		let msg = ''; 
		if (retcode == 0) { 
			msg = msg + 'getToken result:' + token + '\n'; 
		} else { 
			msg = msg + 'getToken exception, error:' + token + '\n'; 
		}
		console.log(msg);
	});
}

```
HMS Push FAQ : https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/push-faq-v4

Read more about HMS push: https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/push-rn-dev-guide


## References 
https://developer.huawei.com/consumer/en/doc/overview/HMS
