
package com.el173.utils;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.common.GooglePlayServicesUtil;
import com.huawei.hms.api.HuaweiApiAvailability;

public class HmsUtils extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public HmsUtils(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "Utils";
  }

  @ReactMethod
  public void isHMSAvailable(Promise promise) {
      HuaweiApiAvailability hms = HuaweiApiAvailability.getInstance();
      int isHMS = hms.isHuaweiMobileServicesAvailable(reactContext);
      promise.resolve(isHMS == ConnectionResult.SUCCESS);
  }

  @ReactMethod
  public void isGMSAvailable(Promise promise) {
      GoogleApiAvailability gms = GoogleApiAvailability.getInstance();
      int isGMS = gms.isGooglePlayServicesAvailable(reactContext);
      promise.resolve(isGMS == ConnectionResult.SUCCESS);
  }
}