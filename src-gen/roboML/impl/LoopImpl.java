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
import roboML.Entity;
import roboML.Loop;
import roboML.RoboMLPackage;
import roboML.Statement;
import roboML.Variable;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Loop</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link roboML.impl.LoopImpl#getInstruction <em>Instruction</em>}</li>
 *   <li>{@link roboML.impl.LoopImpl#getVariable <em>Variable</em>}</li>
 *   <li>{@link roboML.impl.LoopImpl#getBooleanExpression <em>Boolean Expression</em>}</li>
 * </ul>
 *
 * @generated
 */
public class LoopImpl extends StatementImpl implements Loop {
	/**
	 * The cached value of the '{@link #getInstruction() <em>Instruction</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getInstruction()
	 * @generated
	 * @ordered
	 */
	protected EList<Statement> instruction;

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
	 * The cached value of the '{@link #getBooleanExpression() <em>Boolean Expression</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getBooleanExpression()
	 * @generated
	 * @ordered
	 */
	protected Entity booleanExpression;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected LoopImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RoboMLPackage.Literals.LOOP;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Statement> getInstruction() {
		if (instruction == null) {
			instruction = new EObjectContainmentEList<Statement>(Statement.class, this,
					RoboMLPackage.LOOP__INSTRUCTION);
		}
		return instruction;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Variable> getVariable() {
		if (variable == null) {
			variable = new EObjectContainmentEList<Variable>(Variable.class, this, RoboMLPackage.LOOP__VARIABLE);
		}
		return variable;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Entity getBooleanExpression() {
		if (booleanExpression != null && booleanExpression.eIsProxy()) {
			InternalEObject oldBooleanExpression = (InternalEObject) booleanExpression;
			booleanExpression = (Entity) eResolveProxy(oldBooleanExpression);
			if (booleanExpression != oldBooleanExpression) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, RoboMLPackage.LOOP__BOOLEAN_EXPRESSION,
							oldBooleanExpression, booleanExpression));
			}
		}
		return booleanExpression;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Entity basicGetBooleanExpression() {
		return booleanExpression;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setBooleanExpression(Entity newBooleanExpression) {
		Entity oldBooleanExpression = booleanExpression;
		booleanExpression = newBooleanExpression;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.LOOP__BOOLEAN_EXPRESSION,
					oldBooleanExpression, booleanExpression));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public NotificationChain eInverseRemove(InternalEObject otherEnd, int featureID, NotificationChain msgs) {
		switch (featureID) {
		case RoboMLPackage.LOOP__INSTRUCTION:
			return ((InternalEList<?>) getInstruction()).basicRemove(otherEnd, msgs);
		case RoboMLPackage.LOOP__VARIABLE:
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
		case RoboMLPackage.LOOP__INSTRUCTION:
			return getInstruction();
		case RoboMLPackage.LOOP__VARIABLE:
			return getVariable();
		case RoboMLPackage.LOOP__BOOLEAN_EXPRESSION:
			if (resolve)
				return getBooleanExpression();
			return basicGetBooleanExpression();
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
		case RoboMLPackage.LOOP__INSTRUCTION:
			getInstruction().clear();
			getInstruction().addAll((Collection<? extends Statement>) newValue);
			return;
		case RoboMLPackage.LOOP__VARIABLE:
			getVariable().clear();
			getVariable().addAll((Collection<? extends Variable>) newValue);
			return;
		case RoboMLPackage.LOOP__BOOLEAN_EXPRESSION:
			setBooleanExpression((Entity) newValue);
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
		case RoboMLPackage.LOOP__INSTRUCTION:
			getInstruction().clear();
			return;
		case RoboMLPackage.LOOP__VARIABLE:
			getVariable().clear();
			return;
		case RoboMLPackage.LOOP__BOOLEAN_EXPRESSION:
			setBooleanExpression((Entity) null);
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
		case RoboMLPackage.LOOP__INSTRUCTION:
			return instruction != null && !instruction.isEmpty();
		case RoboMLPackage.LOOP__VARIABLE:
			return variable != null && !variable.isEmpty();
		case RoboMLPackage.LOOP__BOOLEAN_EXPRESSION:
			return booleanExpression != null;
		}
		return super.eIsSet(featureID);
	}

} //LoopImpl
