/**
 */
package roboML.impl;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;

import roboML.Entity;
import roboML.RoboMLPackage;
import roboML.Rotation;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Rotation</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link roboML.impl.RotationImpl#getRotationAngle <em>Rotation Angle</em>}</li>
 *   <li>{@link roboML.impl.RotationImpl#getRotationSens <em>Rotation Sens</em>}</li>
 * </ul>
 *
 * @generated
 */
public class RotationImpl extends StatementImpl implements Rotation {
	/**
	 * The cached value of the '{@link #getRotationAngle() <em>Rotation Angle</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getRotationAngle()
	 * @generated
	 * @ordered
	 */
	protected Entity rotationAngle;

	/**
	 * The cached value of the '{@link #getRotationSens() <em>Rotation Sens</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getRotationSens()
	 * @generated
	 * @ordered
	 */
	protected Entity rotationSens;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected RotationImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RoboMLPackage.Literals.ROTATION;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Entity getRotationAngle() {
		if (rotationAngle != null && rotationAngle.eIsProxy()) {
			InternalEObject oldRotationAngle = (InternalEObject) rotationAngle;
			rotationAngle = (Entity) eResolveProxy(oldRotationAngle);
			if (rotationAngle != oldRotationAngle) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, RoboMLPackage.ROTATION__ROTATION_ANGLE,
							oldRotationAngle, rotationAngle));
			}
		}
		return rotationAngle;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Entity basicGetRotationAngle() {
		return rotationAngle;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setRotationAngle(Entity newRotationAngle) {
		Entity oldRotationAngle = rotationAngle;
		rotationAngle = newRotationAngle;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.ROTATION__ROTATION_ANGLE,
					oldRotationAngle, rotationAngle));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Entity getRotationSens() {
		if (rotationSens != null && rotationSens.eIsProxy()) {
			InternalEObject oldRotationSens = (InternalEObject) rotationSens;
			rotationSens = (Entity) eResolveProxy(oldRotationSens);
			if (rotationSens != oldRotationSens) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, RoboMLPackage.ROTATION__ROTATION_SENS,
							oldRotationSens, rotationSens));
			}
		}
		return rotationSens;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Entity basicGetRotationSens() {
		return rotationSens;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setRotationSens(Entity newRotationSens) {
		Entity oldRotationSens = rotationSens;
		rotationSens = newRotationSens;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.ROTATION__ROTATION_SENS,
					oldRotationSens, rotationSens));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case RoboMLPackage.ROTATION__ROTATION_ANGLE:
			if (resolve)
				return getRotationAngle();
			return basicGetRotationAngle();
		case RoboMLPackage.ROTATION__ROTATION_SENS:
			if (resolve)
				return getRotationSens();
			return basicGetRotationSens();
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
		case RoboMLPackage.ROTATION__ROTATION_ANGLE:
			setRotationAngle((Entity) newValue);
			return;
		case RoboMLPackage.ROTATION__ROTATION_SENS:
			setRotationSens((Entity) newValue);
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
		case RoboMLPackage.ROTATION__ROTATION_ANGLE:
			setRotationAngle((Entity) null);
			return;
		case RoboMLPackage.ROTATION__ROTATION_SENS:
			setRotationSens((Entity) null);
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
		case RoboMLPackage.ROTATION__ROTATION_ANGLE:
			return rotationAngle != null;
		case RoboMLPackage.ROTATION__ROTATION_SENS:
			return rotationSens != null;
		}
		return super.eIsSet(featureID);
	}

} //RotationImpl
