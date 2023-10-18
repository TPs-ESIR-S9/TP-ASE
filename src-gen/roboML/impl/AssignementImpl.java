/**
 */
package roboML.impl;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;

import roboML.Assignement;
import roboML.Entity;
import roboML.RoboMLPackage;
import roboML.Variable;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Assignement</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link roboML.impl.AssignementImpl#getAssignableVariable <em>Assignable Variable</em>}</li>
 *   <li>{@link roboML.impl.AssignementImpl#getEntity <em>Entity</em>}</li>
 * </ul>
 *
 * @generated
 */
public class AssignementImpl extends StatementImpl implements Assignement {
	/**
	 * The cached value of the '{@link #getAssignableVariable() <em>Assignable Variable</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getAssignableVariable()
	 * @generated
	 * @ordered
	 */
	protected Variable assignableVariable;

	/**
	 * The cached value of the '{@link #getEntity() <em>Entity</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getEntity()
	 * @generated
	 * @ordered
	 */
	protected Entity entity;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected AssignementImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RoboMLPackage.Literals.ASSIGNEMENT;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Variable getAssignableVariable() {
		if (assignableVariable != null && assignableVariable.eIsProxy()) {
			InternalEObject oldAssignableVariable = (InternalEObject) assignableVariable;
			assignableVariable = (Variable) eResolveProxy(oldAssignableVariable);
			if (assignableVariable != oldAssignableVariable) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE,
							RoboMLPackage.ASSIGNEMENT__ASSIGNABLE_VARIABLE, oldAssignableVariable, assignableVariable));
			}
		}
		return assignableVariable;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Variable basicGetAssignableVariable() {
		return assignableVariable;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setAssignableVariable(Variable newAssignableVariable) {
		Variable oldAssignableVariable = assignableVariable;
		assignableVariable = newAssignableVariable;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.ASSIGNEMENT__ASSIGNABLE_VARIABLE,
					oldAssignableVariable, assignableVariable));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Entity getEntity() {
		if (entity != null && entity.eIsProxy()) {
			InternalEObject oldEntity = (InternalEObject) entity;
			entity = (Entity) eResolveProxy(oldEntity);
			if (entity != oldEntity) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, RoboMLPackage.ASSIGNEMENT__ENTITY,
							oldEntity, entity));
			}
		}
		return entity;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Entity basicGetEntity() {
		return entity;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setEntity(Entity newEntity) {
		Entity oldEntity = entity;
		entity = newEntity;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.ASSIGNEMENT__ENTITY, oldEntity,
					entity));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case RoboMLPackage.ASSIGNEMENT__ASSIGNABLE_VARIABLE:
			if (resolve)
				return getAssignableVariable();
			return basicGetAssignableVariable();
		case RoboMLPackage.ASSIGNEMENT__ENTITY:
			if (resolve)
				return getEntity();
			return basicGetEntity();
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
		case RoboMLPackage.ASSIGNEMENT__ASSIGNABLE_VARIABLE:
			setAssignableVariable((Variable) newValue);
			return;
		case RoboMLPackage.ASSIGNEMENT__ENTITY:
			setEntity((Entity) newValue);
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
		case RoboMLPackage.ASSIGNEMENT__ASSIGNABLE_VARIABLE:
			setAssignableVariable((Variable) null);
			return;
		case RoboMLPackage.ASSIGNEMENT__ENTITY:
			setEntity((Entity) null);
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
		case RoboMLPackage.ASSIGNEMENT__ASSIGNABLE_VARIABLE:
			return assignableVariable != null;
		case RoboMLPackage.ASSIGNEMENT__ENTITY:
			return entity != null;
		}
		return super.eIsSet(featureID);
	}

} //AssignementImpl
