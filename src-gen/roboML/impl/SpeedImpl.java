/**
 */
package roboML.impl;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

import roboML.RMLObject;
import roboML.RoboMLPackage;
import roboML.SetValue;
import roboML.Speed;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Speed</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link roboML.impl.SpeedImpl#getDeplacementSpeed <em>Deplacement Speed</em>}</li>
 *   <li>{@link roboML.impl.SpeedImpl#getSetSpeedValue <em>Set Speed Value</em>}</li>
 * </ul>
 *
 * @generated
 */
public class SpeedImpl extends MinimalEObjectImpl.Container implements Speed {
	/**
	 * The default value of the '{@link #getDeplacementSpeed() <em>Deplacement Speed</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDeplacementSpeed()
	 * @generated
	 * @ordered
	 */
	protected static final RMLObject DEPLACEMENT_SPEED_EDEFAULT = RMLObject.RML_INT;

	/**
	 * The cached value of the '{@link #getDeplacementSpeed() <em>Deplacement Speed</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDeplacementSpeed()
	 * @generated
	 * @ordered
	 */
	protected RMLObject deplacementSpeed = DEPLACEMENT_SPEED_EDEFAULT;

	/**
	 * The cached value of the '{@link #getSetSpeedValue() <em>Set Speed Value</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getSetSpeedValue()
	 * @generated
	 * @ordered
	 */
	protected SetValue setSpeedValue;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected SpeedImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RoboMLPackage.Literals.SPEED;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public RMLObject getDeplacementSpeed() {
		return deplacementSpeed;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setDeplacementSpeed(RMLObject newDeplacementSpeed) {
		RMLObject oldDeplacementSpeed = deplacementSpeed;
		deplacementSpeed = newDeplacementSpeed == null ? DEPLACEMENT_SPEED_EDEFAULT : newDeplacementSpeed;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.SPEED__DEPLACEMENT_SPEED,
					oldDeplacementSpeed, deplacementSpeed));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public SetValue getSetSpeedValue() {
		if (setSpeedValue != null && setSpeedValue.eIsProxy()) {
			InternalEObject oldSetSpeedValue = (InternalEObject) setSpeedValue;
			setSpeedValue = (SetValue) eResolveProxy(oldSetSpeedValue);
			if (setSpeedValue != oldSetSpeedValue) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, RoboMLPackage.SPEED__SET_SPEED_VALUE,
							oldSetSpeedValue, setSpeedValue));
			}
		}
		return setSpeedValue;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public SetValue basicGetSetSpeedValue() {
		return setSpeedValue;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setSetSpeedValue(SetValue newSetSpeedValue) {
		SetValue oldSetSpeedValue = setSpeedValue;
		setSpeedValue = newSetSpeedValue;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.SPEED__SET_SPEED_VALUE,
					oldSetSpeedValue, setSpeedValue));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case RoboMLPackage.SPEED__DEPLACEMENT_SPEED:
			return getDeplacementSpeed();
		case RoboMLPackage.SPEED__SET_SPEED_VALUE:
			if (resolve)
				return getSetSpeedValue();
			return basicGetSetSpeedValue();
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
		case RoboMLPackage.SPEED__DEPLACEMENT_SPEED:
			setDeplacementSpeed((RMLObject) newValue);
			return;
		case RoboMLPackage.SPEED__SET_SPEED_VALUE:
			setSetSpeedValue((SetValue) newValue);
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
		case RoboMLPackage.SPEED__DEPLACEMENT_SPEED:
			setDeplacementSpeed(DEPLACEMENT_SPEED_EDEFAULT);
			return;
		case RoboMLPackage.SPEED__SET_SPEED_VALUE:
			setSetSpeedValue((SetValue) null);
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
		case RoboMLPackage.SPEED__DEPLACEMENT_SPEED:
			return deplacementSpeed != DEPLACEMENT_SPEED_EDEFAULT;
		case RoboMLPackage.SPEED__SET_SPEED_VALUE:
			return setSpeedValue != null;
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
		result.append(" (deplacementSpeed: ");
		result.append(deplacementSpeed);
		result.append(')');
		return result.toString();
	}

} //SpeedImpl
