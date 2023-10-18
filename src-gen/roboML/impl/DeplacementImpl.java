/**
 */
package roboML.impl;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;

import roboML.Deplacement;
import roboML.Direction;
import roboML.Entity;
import roboML.RoboMLPackage;
import roboML.Unit;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Deplacement</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link roboML.impl.DeplacementImpl#getUnit <em>Unit</em>}</li>
 *   <li>{@link roboML.impl.DeplacementImpl#getDeplacementDistance <em>Deplacement Distance</em>}</li>
 *   <li>{@link roboML.impl.DeplacementImpl#getMovementType <em>Movement Type</em>}</li>
 * </ul>
 *
 * @generated
 */
public class DeplacementImpl extends StatementImpl implements Deplacement {
	/**
	 * The cached value of the '{@link #getUnit() <em>Unit</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getUnit()
	 * @generated
	 * @ordered
	 */
	protected Unit unit;

	/**
	 * The cached value of the '{@link #getDeplacementDistance() <em>Deplacement Distance</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDeplacementDistance()
	 * @generated
	 * @ordered
	 */
	protected Entity deplacementDistance;

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
	protected DeplacementImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RoboMLPackage.Literals.DEPLACEMENT;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Unit getUnit() {
		if (unit != null && unit.eIsProxy()) {
			InternalEObject oldUnit = (InternalEObject) unit;
			unit = (Unit) eResolveProxy(oldUnit);
			if (unit != oldUnit) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, RoboMLPackage.DEPLACEMENT__UNIT, oldUnit,
							unit));
			}
		}
		return unit;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Unit basicGetUnit() {
		return unit;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setUnit(Unit newUnit) {
		Unit oldUnit = unit;
		unit = newUnit;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.DEPLACEMENT__UNIT, oldUnit, unit));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Entity getDeplacementDistance() {
		if (deplacementDistance != null && deplacementDistance.eIsProxy()) {
			InternalEObject oldDeplacementDistance = (InternalEObject) deplacementDistance;
			deplacementDistance = (Entity) eResolveProxy(oldDeplacementDistance);
			if (deplacementDistance != oldDeplacementDistance) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE,
							RoboMLPackage.DEPLACEMENT__DEPLACEMENT_DISTANCE, oldDeplacementDistance,
							deplacementDistance));
			}
		}
		return deplacementDistance;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Entity basicGetDeplacementDistance() {
		return deplacementDistance;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setDeplacementDistance(Entity newDeplacementDistance) {
		Entity oldDeplacementDistance = deplacementDistance;
		deplacementDistance = newDeplacementDistance;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.DEPLACEMENT__DEPLACEMENT_DISTANCE,
					oldDeplacementDistance, deplacementDistance));
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
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.DEPLACEMENT__MOVEMENT_TYPE,
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
		case RoboMLPackage.DEPLACEMENT__UNIT:
			if (resolve)
				return getUnit();
			return basicGetUnit();
		case RoboMLPackage.DEPLACEMENT__DEPLACEMENT_DISTANCE:
			if (resolve)
				return getDeplacementDistance();
			return basicGetDeplacementDistance();
		case RoboMLPackage.DEPLACEMENT__MOVEMENT_TYPE:
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
		case RoboMLPackage.DEPLACEMENT__UNIT:
			setUnit((Unit) newValue);
			return;
		case RoboMLPackage.DEPLACEMENT__DEPLACEMENT_DISTANCE:
			setDeplacementDistance((Entity) newValue);
			return;
		case RoboMLPackage.DEPLACEMENT__MOVEMENT_TYPE:
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
		case RoboMLPackage.DEPLACEMENT__UNIT:
			setUnit((Unit) null);
			return;
		case RoboMLPackage.DEPLACEMENT__DEPLACEMENT_DISTANCE:
			setDeplacementDistance((Entity) null);
			return;
		case RoboMLPackage.DEPLACEMENT__MOVEMENT_TYPE:
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
		case RoboMLPackage.DEPLACEMENT__UNIT:
			return unit != null;
		case RoboMLPackage.DEPLACEMENT__DEPLACEMENT_DISTANCE:
			return deplacementDistance != null;
		case RoboMLPackage.DEPLACEMENT__MOVEMENT_TYPE:
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

} //DeplacementImpl
