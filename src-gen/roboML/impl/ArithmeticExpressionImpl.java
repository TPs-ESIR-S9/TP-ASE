/**
 */
package roboML.impl;

import java.util.Collection;

import org.eclipse.emf.common.notify.Notification;
import org.eclipse.emf.common.notify.NotificationChain;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;

import org.eclipse.emf.ecore.util.EObjectContainmentEList;
import org.eclipse.emf.ecore.util.InternalEList;

import roboML.ArithmeticExpression;
import roboML.ArithmeticOperators;
import roboML.Entity;
import roboML.RoboMLPackage;
import roboML.Variable;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Arithmetic Expression</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link roboML.impl.ArithmeticExpressionImpl#getVariable <em>Variable</em>}</li>
 *   <li>{@link roboML.impl.ArithmeticExpressionImpl#getElementA <em>Element A</em>}</li>
 *   <li>{@link roboML.impl.ArithmeticExpressionImpl#getElementB <em>Element B</em>}</li>
 *   <li>{@link roboML.impl.ArithmeticExpressionImpl#getArithmeticOperator <em>Arithmetic Operator</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ArithmeticExpressionImpl extends EntityImpl implements ArithmeticExpression {
	/**
	 * The cached value of the '{@link #getVariable() <em>Variable</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getVariable()
	 * @generated
	 * @ordered
	 */
	protected EList<Variable> variable;

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
	 * The default value of the '{@link #getArithmeticOperator() <em>Arithmetic Operator</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getArithmeticOperator()
	 * @generated
	 * @ordered
	 */
	protected static final ArithmeticOperators ARITHMETIC_OPERATOR_EDEFAULT = ArithmeticOperators.PLUS;

	/**
	 * The cached value of the '{@link #getArithmeticOperator() <em>Arithmetic Operator</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getArithmeticOperator()
	 * @generated
	 * @ordered
	 */
	protected ArithmeticOperators arithmeticOperator = ARITHMETIC_OPERATOR_EDEFAULT;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ArithmeticExpressionImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RoboMLPackage.Literals.ARITHMETIC_EXPRESSION;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Variable> getVariable() {
		if (variable == null) {
			variable = new EObjectContainmentEList<Variable>(Variable.class, this,
					RoboMLPackage.ARITHMETIC_EXPRESSION__VARIABLE);
		}
		return variable;
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
							RoboMLPackage.ARITHMETIC_EXPRESSION__ELEMENT_A, oldElementA, elementA));
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
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.ARITHMETIC_EXPRESSION__ELEMENT_A,
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
							RoboMLPackage.ARITHMETIC_EXPRESSION__ELEMENT_B, oldElementB, elementB));
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
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.ARITHMETIC_EXPRESSION__ELEMENT_B,
					oldElementB, elementB));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public ArithmeticOperators getArithmeticOperator() {
		return arithmeticOperator;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setArithmeticOperator(ArithmeticOperators newArithmeticOperator) {
		ArithmeticOperators oldArithmeticOperator = arithmeticOperator;
		arithmeticOperator = newArithmeticOperator == null ? ARITHMETIC_OPERATOR_EDEFAULT : newArithmeticOperator;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET,
					RoboMLPackage.ARITHMETIC_EXPRESSION__ARITHMETIC_OPERATOR, oldArithmeticOperator,
					arithmeticOperator));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public NotificationChain eInverseRemove(InternalEObject otherEnd, int featureID, NotificationChain msgs) {
		switch (featureID) {
		case RoboMLPackage.ARITHMETIC_EXPRESSION__VARIABLE:
			return ((InternalEList<?>) getVariable()).basicRemove(otherEnd, msgs);
		}
		return super.eInverseRemove(otherEnd, featureID, msgs);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case RoboMLPackage.ARITHMETIC_EXPRESSION__VARIABLE:
			return getVariable();
		case RoboMLPackage.ARITHMETIC_EXPRESSION__ELEMENT_A:
			if (resolve)
				return getElementA();
			return basicGetElementA();
		case RoboMLPackage.ARITHMETIC_EXPRESSION__ELEMENT_B:
			if (resolve)
				return getElementB();
			return basicGetElementB();
		case RoboMLPackage.ARITHMETIC_EXPRESSION__ARITHMETIC_OPERATOR:
			return getArithmeticOperator();
		}
		return super.eGet(featureID, resolve, coreType);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	@Override
	public void eSet(int featureID, Object newValue) {
		switch (featureID) {
		case RoboMLPackage.ARITHMETIC_EXPRESSION__VARIABLE:
			getVariable().clear();
			getVariable().addAll((Collection<? extends Variable>) newValue);
			return;
		case RoboMLPackage.ARITHMETIC_EXPRESSION__ELEMENT_A:
			setElementA((Entity) newValue);
			return;
		case RoboMLPackage.ARITHMETIC_EXPRESSION__ELEMENT_B:
			setElementB((Entity) newValue);
			return;
		case RoboMLPackage.ARITHMETIC_EXPRESSION__ARITHMETIC_OPERATOR:
			setArithmeticOperator((ArithmeticOperators) newValue);
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
		case RoboMLPackage.ARITHMETIC_EXPRESSION__VARIABLE:
			getVariable().clear();
			return;
		case RoboMLPackage.ARITHMETIC_EXPRESSION__ELEMENT_A:
			setElementA((Entity) null);
			return;
		case RoboMLPackage.ARITHMETIC_EXPRESSION__ELEMENT_B:
			setElementB((Entity) null);
			return;
		case RoboMLPackage.ARITHMETIC_EXPRESSION__ARITHMETIC_OPERATOR:
			setArithmeticOperator(ARITHMETIC_OPERATOR_EDEFAULT);
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
		case RoboMLPackage.ARITHMETIC_EXPRESSION__VARIABLE:
			return variable != null && !variable.isEmpty();
		case RoboMLPackage.ARITHMETIC_EXPRESSION__ELEMENT_A:
			return elementA != null;
		case RoboMLPackage.ARITHMETIC_EXPRESSION__ELEMENT_B:
			return elementB != null;
		case RoboMLPackage.ARITHMETIC_EXPRESSION__ARITHMETIC_OPERATOR:
			return arithmeticOperator != ARITHMETIC_OPERATOR_EDEFAULT;
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
		result.append(" (arithmeticOperator: ");
		result.append(arithmeticOperator);
		result.append(')');
		return result.toString();
	}

} //ArithmeticExpressionImpl
