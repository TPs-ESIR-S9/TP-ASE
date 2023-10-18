/**
 */
package roboML.impl;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

import roboML.Direction;
import roboML.Movement;
import roboML.RoboMLPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Movement</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link roboML.impl.MovementImpl#getMovementType <em>Movement Type</em>}</li>
 * </ul>
 *
 * @generated
 */
public class MovementImpl extends MinimalEObjectImpl.Container implements Movement {
	/**
	 * The default value of the '{@link #getMovementType() <em>Movement Type</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getMovementType()
	 * @generated
	 * @ordered
	 */
	protected static final Direction MOVEMENT_TYPE_EDEFAULT = Direction.FORWARD;

	/**
	 * The cached value of the '{@link #getMovementType() <em>Movement Type</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getMovementType()
	 * @generated
	 * @ordered
	 */
	protected Direction movementType = MOVEMENT_TYPE_EDEFAULT;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected MovementImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RoboMLPackage.Literals.MOVEMENT;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Direction getMovementType() {
		return movementType;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setMovementType(Direction newMovementType) {
		Direction oldMovementType = movementType;
		movementType = newMovementType == null ? MOVEMENT_TYPE_EDEFAULT : newMovementType;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.MOVEMENT__MOVEMENT_TYPE,
					oldMovementType, movementType));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case RoboMLPackage.MOVEMENT__MOVEMENT_TYPE:
			return getMovementType();
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
		case RoboMLPackage.MOVEMENT__MOVEMENT_TYPE:
			setMovementType((Direction) newValue);
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
		case RoboMLPackage.MOVEMENT__MOVEMENT_TYPE:
			setMovementType(MOVEMENT_TYPE_EDEFAULT);
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
		case RoboMLPackage.MOVEMENT__MOVEMENT_TYPE:
			return movementType != MOVEMENT_TYPE_EDEFAULT;
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
		result.append(" (movementType: ");
		result.append(movementType);
		result.append(')');
		return result.toString();
	}

} //MovementImpl
