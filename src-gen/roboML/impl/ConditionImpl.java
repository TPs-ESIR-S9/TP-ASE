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

import roboML.BooleanExpression;
import roboML.Condition;
import roboML.RoboMLPackage;
import roboML.Statement;
import roboML.Variable;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Condition</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link roboML.impl.ConditionImpl#getStatementIf <em>Statement If</em>}</li>
 *   <li>{@link roboML.impl.ConditionImpl#getStatementElse <em>Statement Else</em>}</li>
 *   <li>{@link roboML.impl.ConditionImpl#getBooleanexpression <em>Booleanexpression</em>}</li>
 *   <li>{@link roboML.impl.ConditionImpl#getVariable <em>Variable</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ConditionImpl extends StatementImpl implements Condition {
	/**
	 * The cached value of the '{@link #getStatementIf() <em>Statement If</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getStatementIf()
	 * @generated
	 * @ordered
	 */
	protected EList<Statement> statementIf;

	/**
	 * The cached value of the '{@link #getStatementElse() <em>Statement Else</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getStatementElse()
	 * @generated
	 * @ordered
	 */
	protected EList<Statement> statementElse;

	/**
	 * The cached value of the '{@link #getBooleanexpression() <em>Booleanexpression</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getBooleanexpression()
	 * @generated
	 * @ordered
	 */
	protected BooleanExpression booleanexpression;

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
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ConditionImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RoboMLPackage.Literals.CONDITION;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Statement> getStatementIf() {
		if (statementIf == null) {
			statementIf = new EObjectContainmentEList<Statement>(Statement.class, this,
					RoboMLPackage.CONDITION__STATEMENT_IF);
		}
		return statementIf;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Statement> getStatementElse() {
		if (statementElse == null) {
			statementElse = new EObjectContainmentEList<Statement>(Statement.class, this,
					RoboMLPackage.CONDITION__STATEMENT_ELSE);
		}
		return statementElse;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public BooleanExpression getBooleanexpression() {
		if (booleanexpression != null && booleanexpression.eIsProxy()) {
			InternalEObject oldBooleanexpression = (InternalEObject) booleanexpression;
			booleanexpression = (BooleanExpression) eResolveProxy(oldBooleanexpression);
			if (booleanexpression != oldBooleanexpression) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE,
							RoboMLPackage.CONDITION__BOOLEANEXPRESSION, oldBooleanexpression, booleanexpression));
			}
		}
		return booleanexpression;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public BooleanExpression basicGetBooleanexpression() {
		return booleanexpression;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setBooleanexpression(BooleanExpression newBooleanexpression) {
		BooleanExpression oldBooleanexpression = booleanexpression;
		booleanexpression = newBooleanexpression;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.CONDITION__BOOLEANEXPRESSION,
					oldBooleanexpression, booleanexpression));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Variable> getVariable() {
		if (variable == null) {
			variable = new EObjectContainmentEList<Variable>(Variable.class, this, RoboMLPackage.CONDITION__VARIABLE);
		}
		return variable;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public NotificationChain eInverseRemove(InternalEObject otherEnd, int featureID, NotificationChain msgs) {
		switch (featureID) {
		case RoboMLPackage.CONDITION__STATEMENT_IF:
			return ((InternalEList<?>) getStatementIf()).basicRemove(otherEnd, msgs);
		case RoboMLPackage.CONDITION__STATEMENT_ELSE:
			return ((InternalEList<?>) getStatementElse()).basicRemove(otherEnd, msgs);
		case RoboMLPackage.CONDITION__VARIABLE:
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
		case RoboMLPackage.CONDITION__STATEMENT_IF:
			return getStatementIf();
		case RoboMLPackage.CONDITION__STATEMENT_ELSE:
			return getStatementElse();
		case RoboMLPackage.CONDITION__BOOLEANEXPRESSION:
			if (resolve)
				return getBooleanexpression();
			return basicGetBooleanexpression();
		case RoboMLPackage.CONDITION__VARIABLE:
			return getVariable();
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
		case RoboMLPackage.CONDITION__STATEMENT_IF:
			getStatementIf().clear();
			getStatementIf().addAll((Collection<? extends Statement>) newValue);
			return;
		case RoboMLPackage.CONDITION__STATEMENT_ELSE:
			getStatementElse().clear();
			getStatementElse().addAll((Collection<? extends Statement>) newValue);
			return;
		case RoboMLPackage.CONDITION__BOOLEANEXPRESSION:
			setBooleanexpression((BooleanExpression) newValue);
			return;
		case RoboMLPackage.CONDITION__VARIABLE:
			getVariable().clear();
			getVariable().addAll((Collection<? extends Variable>) newValue);
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
		case RoboMLPackage.CONDITION__STATEMENT_IF:
			getStatementIf().clear();
			return;
		case RoboMLPackage.CONDITION__STATEMENT_ELSE:
			getStatementElse().clear();
			return;
		case RoboMLPackage.CONDITION__BOOLEANEXPRESSION:
			setBooleanexpression((BooleanExpression) null);
			return;
		case RoboMLPackage.CONDITION__VARIABLE:
			getVariable().clear();
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
		case RoboMLPackage.CONDITION__STATEMENT_IF:
			return statementIf != null && !statementIf.isEmpty();
		case RoboMLPackage.CONDITION__STATEMENT_ELSE:
			return statementElse != null && !statementElse.isEmpty();
		case RoboMLPackage.CONDITION__BOOLEANEXPRESSION:
			return booleanexpression != null;
		case RoboMLPackage.CONDITION__VARIABLE:
			return variable != null && !variable.isEmpty();
		}
		return super.eIsSet(featureID);
	}

} //ConditionImpl
