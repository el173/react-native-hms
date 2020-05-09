package com.el173;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import com.el173.utils.HmsUtils;

import com.el173.analytics.HaInterfaceModule;

import com.el173.push.RNHmsInstanceId;
import com.el173.push.RNHmsMessaging;
import com.el173.push.RNReceiver;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class HMSPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {

        List<NativeModule> modules = new ArrayList<>();

        modules.add(new HmsUtils(reactContext));
        modules.add(new HaInterfaceModule(reactContext));
        modules.add(new RNHmsInstanceId(reactContext));
        modules.add(new RNHmsMessaging(reactContext));
        modules.add(new RNReceiver(reactContext));

        return modules;
    }

    // Deprecated from RN 0.47
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
