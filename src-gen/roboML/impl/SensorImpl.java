/**
 */
package roboML.impl;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

import roboML.GetValue;
import roboML.RMLObject;
import roboML.RoboMLPackage;
import roboML.Sensor;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Sensor</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link roboML.impl.SensorImpl#getSensorValue <em>Sensor Value</em>}</li>
 *   <li>{@link roboML.impl.SensorImpl#getGetSensorValue <em>Get Sensor Value</em>}</li>
 * </ul>
 *
 * @generated
 */
public abstract class SensorImpl extends MinimalEObjectImpl.Container implements Sensor {
	/**
	 * The default value of the '{@link #getSensorValue() <em>Sensor Value</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getSensorValue()
	 * @generated
	 * @ordered
	 */
	protected static final RMLObject SENSOR_VALUE_EDEFAULT = RMLObject.RML_INT;

	/**
	 * The cached value of the '{@link #getSensorValue() <em>Sensor Value</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getSensorValue()
	 * @generated
	 * @ordered
	 */
	protected RMLObject sensorValue = SENSOR_VALUE_EDEFAULT;

	/**
	 * The cached value of the '{@link #getGetSensorValue() <em>Get Sensor Value</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getGetSensorValue()
	 * @generated
	 * @ordered
	 */
	protected GetValue getSensorValue;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected SensorImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RoboMLPackage.Literals.SENSOR;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public RMLObject getSensorValue() {
		return sensorValue;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setSensorValue(RMLObject newSensorValue) {
		RMLObject oldSensorValue = sensorValue;
		sensorValue = newSensorValue == null ? SENSOR_VALUE_EDEFAULT : newSensorValue;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.SENSOR__SENSOR_VALUE, oldSensorValue,
					sensorValue));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public GetValue getGetSensorValue() {
		if (getSensorValue != null && getSensorValue.eIsProxy()) {
			InternalEObject oldGetSensorValue = (InternalEObject) getSensorValue;
			getSensorValue = (GetValue) eResolveProxy(oldGetSensorValue);
			if (getSensorValue != oldGetSensorValue) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, RoboMLPackage.SENSOR__GET_SENSOR_VALUE,
							oldGetSensorValue, getSensorValue));
			}
		}
		return getSensorValue;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public GetValue basicGetGetSensorValue() {
		return getSensorValue;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setGetSensorValue(GetValue newGetSensorValue) {
		GetValue oldGetSensorValue = getSensorValue;
		getSensorValue = newGetSensorValue;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.SENSOR__GET_SENSOR_VALUE,
					oldGetSensorValue, getSensorValue));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case RoboMLPackage.SENSOR__SENSOR_VALUE:
			return getSensorValue();
		case RoboMLPackage.SENSOR__GET_SENSOR_VALUE:
			if (resolve)
				return getGetSensorValue();
			return basicGetGetSensorValue();
		}
		return super.eGet(featureID, resolve, coreType);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void eSet(int featureID, Object newValue) {
		switch (featureID) {
		case RoboMLPackage.SENSOR__SENSOR_VALUE:
			setSensorValue((RMLObject) newValue);
			return;
		case RoboMLPackage.SENSOR__GET_SENSOR_VALUE:
			setGetSensorValue((GetValue) newValue);
			return;
		}
		super.eSet(featureID, newValue);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void eUnset(int featureID) {
		switch (featureID) {
		case RoboMLPackage.SENSOR__SENSOR_VALUE:
			setSensorValue(SENSOR_VALUE_EDEFAULT);
			return;
		case RoboMLPackage.SENSOR__GET_SENSOR_VALUE:
			setGetSensorValue((GetValue) null);
			return;
		}
		super.eUnset(featureID);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public boolean eIsSet(int featureID) {
		switch (featureID) {
		case RoboMLPackage.SENSOR__SENSOR_VALUE:
			return sensorValue != SENSOR_VALUE_EDEFAULT;
		case RoboMLPackage.SENSOR__GET_SENSOR_VALUE:
			return getSensorValue != null;
		}
		return super.eIsSet(featureID);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String toString() {
		if (eIsProxy())
			return super.toString();

		StringBuilder result = new StringBuilder(super.toString());
		result.append(" (sensorValue: ");
		result.append(sensorValue);
		result.append(')');
		return result.toString();
	}

} //SensorImpl
