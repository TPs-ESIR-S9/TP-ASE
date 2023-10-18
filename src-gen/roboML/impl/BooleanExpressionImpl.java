/**
 */
package roboML.impl;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;

import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;
import roboML.BooleanExpression;
import roboML.BooleanOperators;
import roboML.Entity;
import roboML.RoboMLPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Boolean Expression</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link roboML.impl.BooleanExpressionImpl#getElementA <em>Element A</em>}</li>
 *   <li>{@link roboML.impl.BooleanExpressionImpl#getElementB <em>Element B</em>}</li>
 *   <li>{@link roboML.impl.BooleanExpressionImpl#getBooleanOperator <em>Boolean Operator</em>}</li>
 * </ul>
 *
 * @generated
 */
public class BooleanExpressionImpl extends MinimalEObjectImpl.Container implements BooleanExpression {
	/**
	 * The cached value of the '{@link #getElementA() <em>Element A</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getElementA()
	 * @generated
	 * @ordered
	 */
	protected Entity elementA;

	/**
	 * The cached value of the '{@link #getElementB() <em>Element B</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getElementB()
	 * @generated
	 * @ordered
	 */
	protected Entity elementB;

	/**
	 * The default value of the '{@link #getBooleanOperator() <em>Boolean Operator</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getBooleanOperator()
	 * @generated
	 * @ordered
	 */
	protected static final BooleanOperators BOOLEAN_OPERATOR_EDEFAULT = BooleanOperators.INFERIOR;

	/**
	 * The cached value of the '{@link #getBooleanOperator() <em>Boolean Operator</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getBooleanOperator()
	 * @generated
	 * @ordered
	 */
	protected BooleanOperators booleanOperator = BOOLEAN_OPERATOR_EDEFAULT;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected BooleanExpressionImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RoboMLPackage.Literals.BOOLEAN_EXPRESSION;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Entity getElementA() {
		if (elementA != null && elementA.eIsProxy()) {
			InternalEObject oldElementA = (InternalEObject) elementA;
			elementA = (Entity) eResolveProxy(oldElementA);
			if (elementA != oldElementA) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE,
							RoboMLPackage.BOOLEAN_EXPRESSION__ELEMENT_A, oldElementA, elementA));
			}
		}
		return elementA;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Entity basicGetElementA() {
		return elementA;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setElementA(Entity newElementA) {
		Entity oldElementA = elementA;
		elementA = newElementA;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.BOOLEAN_EXPRESSION__ELEMENT_A,
					oldElementA, elementA));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Entity getElementB() {
		if (elementB != null && elementB.eIsProxy()) {
			InternalEObject oldElementB = (InternalEObject) elementB;
			elementB = (Entity) eResolveProxy(oldElementB);
			if (elementB != oldElementB) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE,
							RoboMLPackage.BOOLEAN_EXPRESSION__ELEMENT_B, oldElementB, elementB));
			}
		}
		return elementB;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Entity basicGetElementB() {
		return elementB;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setElementB(Entity newElementB) {
		Entity oldElementB = elementB;
		elementB = newElementB;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.BOOLEAN_EXPRESSION__ELEMENT_B,
					oldElementB, elementB));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public BooleanOperators getBooleanOperator() {
		return booleanOperator;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setBooleanOperator(BooleanOperators newBooleanOperator) {
		BooleanOperators oldBooleanOperator = booleanOperator;
		booleanOperator = newBooleanOperator == null ? BOOLEAN_OPERATOR_EDEFAULT : newBooleanOperator;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.BOOLEAN_EXPRESSION__BOOLEAN_OPERATOR,
					oldBooleanOperator, booleanOperator));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case RoboMLPackage.BOOLEAN_EXPRESSION__ELEMENT_A:
			if (resolve)
				return getElementA();
			return basicGetElementA();
		case RoboMLPackage.BOOLEAN_EXPRESSION__ELEMENT_B:
			if (resolve)
				return getElementB();
			return basicGetElementB();
		case RoboMLPackage.BOOLEAN_EXPRESSION__BOOLEAN_OPERATOR:
			return getBooleanOperator();
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
		case RoboMLPackage.BOOLEAN_EXPRESSION__ELEMENT_A:
			setElementA((Entity) newValue);
			return;
		case RoboMLPackage.BOOLEAN_EXPRESSION__ELEMENT_B:
			setElementB((Entity) newValue);
			return;
		case RoboMLPackage.BOOLEAN_EXPRESSION__BOOLEAN_OPERATOR:
			setBooleanOperator((BooleanOperators) newValue);
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
		case RoboMLPackage.BOOLEAN_EXPRESSION__ELEMENT_A:
			setElementA((Entity) null);
			return;
		case RoboMLPackage.BOOLEAN_EXPRESSION__ELEMENT_B:
			setElementB((Entity) null);
			return;
		case RoboMLPackage.BOOLEAN_EXPRESSION__BOOLEAN_OPERATOR:
			setBooleanOperator(BOOLEAN_OPERATOR_EDEFAULT);
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
		case RoboMLPackage.BOOLEAN_EXPRESSION__ELEMENT_A:
			return elementA != null;
		case RoboMLPackage.BOOLEAN_EXPRESSION__ELEMENT_B:
			return elementB != null;
		case RoboMLPackage.BOOLEAN_EXPRESSION__BOOLEAN_OPERATOR:
			return booleanOperator != BOOLEAN_OPERATOR_EDEFAULT;
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
		result.append(" (booleanOperator: ");
		result.append(booleanOperator);
		result.append(')');
		return result.toString();
	}

} //BooleanExpressionImpl
