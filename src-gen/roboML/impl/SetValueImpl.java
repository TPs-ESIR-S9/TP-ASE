/**
 */
package roboML.impl;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;

import roboML.Entity;
import roboML.RoboMLPackage;
import roboML.SetValue;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Set Value</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link roboML.impl.SetValueImpl#getEntityToSet <em>Entity To Set</em>}</li>
 * </ul>
 *
 * @generated
 */
public class SetValueImpl extends StatementImpl implements SetValue {
	/**
	 * The cached value of the '{@link #getEntityToSet() <em>Entity To Set</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getEntityToSet()
	 * @generated
	 * @ordered
	 */
	protected Entity entityToSet;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected SetValueImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RoboMLPackage.Literals.SET_VALUE;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Entity getEntityToSet() {
		if (entityToSet != null && entityToSet.eIsProxy()) {
			InternalEObject oldEntityToSet = (InternalEObject) entityToSet;
			entityToSet = (Entity) eResolveProxy(oldEntityToSet);
			if (entityToSet != oldEntityToSet) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, RoboMLPackage.SET_VALUE__ENTITY_TO_SET,
							oldEntityToSet, entityToSet));
			}
		}
		return entityToSet;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Entity basicGetEntityToSet() {
		return entityToSet;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setEntityToSet(Entity newEntityToSet) {
		Entity oldEntityToSet = entityToSet;
		entityToSet = newEntityToSet;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.SET_VALUE__ENTITY_TO_SET,
					oldEntityToSet, entityToSet));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case RoboMLPackage.SET_VALUE__ENTITY_TO_SET:
			if (resolve)
				return getEntityToSet();
			return basicGetEntityToSet();
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
		case RoboMLPackage.SET_VALUE__ENTITY_TO_SET:
			setEntityToSet((Entity) newValue);
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
		case RoboMLPackage.SET_VALUE__ENTITY_TO_SET:
			setEntityToSet((Entity) null);
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
		case RoboMLPackage.SET_VALUE__ENTITY_TO_SET:
			return entityToSet != null;
		}
		return super.eIsSet(featureID);
	}

} //SetValueImpl
