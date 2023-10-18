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
import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

import org.eclipse.emf.ecore.util.EObjectContainmentEList;
import org.eclipse.emf.ecore.util.InternalEList;

import roboML.Function;
import roboML.RMLObject;
import roboML.RoboMLPackage;
import roboML.Statement;
import roboML.Variable;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Function</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link roboML.impl.FunctionImpl#getInstruction <em>Instruction</em>}</li>
 *   <li>{@link roboML.impl.FunctionImpl#getNewAttribute <em>New Attribute</em>}</li>
 *   <li>{@link roboML.impl.FunctionImpl#getReturnType <em>Return Type</em>}</li>
 *   <li>{@link roboML.impl.FunctionImpl#getVariable <em>Variable</em>}</li>
 * </ul>
 *
 * @generated
 */
public class FunctionImpl extends MinimalEObjectImpl.Container implements Function {
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
	 * The default value of the '{@link #getNewAttribute() <em>New Attribute</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getNewAttribute()
	 * @generated
	 * @ordered
	 */
	protected static final RMLObject NEW_ATTRIBUTE_EDEFAULT = RMLObject.RML_INT;

	/**
	 * The cached value of the '{@link #getNewAttribute() <em>New Attribute</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getNewAttribute()
	 * @generated
	 * @ordered
	 */
	protected RMLObject newAttribute = NEW_ATTRIBUTE_EDEFAULT;

	/**
	 * The default value of the '{@link #getReturnType() <em>Return Type</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getReturnType()
	 * @generated
	 * @ordered
	 */
	protected static final RMLObject RETURN_TYPE_EDEFAULT = RMLObject.RML_INT;

	/**
	 * The cached value of the '{@link #getReturnType() <em>Return Type</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getReturnType()
	 * @generated
	 * @ordered
	 */
	protected RMLObject returnType = RETURN_TYPE_EDEFAULT;

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
	protected FunctionImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RoboMLPackage.Literals.FUNCTION;
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
					RoboMLPackage.FUNCTION__INSTRUCTION);
		}
		return instruction;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public RMLObject getNewAttribute() {
		return newAttribute;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setNewAttribute(RMLObject newNewAttribute) {
		RMLObject oldNewAttribute = newAttribute;
		newAttribute = newNewAttribute == null ? NEW_ATTRIBUTE_EDEFAULT : newNewAttribute;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.FUNCTION__NEW_ATTRIBUTE,
					oldNewAttribute, newAttribute));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public RMLObject getReturnType() {
		return returnType;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setReturnType(RMLObject newReturnType) {
		RMLObject oldReturnType = returnType;
		returnType = newReturnType == null ? RETURN_TYPE_EDEFAULT : newReturnType;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.FUNCTION__RETURN_TYPE, oldReturnType,
					returnType));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Variable> getVariable() {
		if (variable == null) {
			variable = new EObjectContainmentEList<Variable>(Variable.class, this, RoboMLPackage.FUNCTION__VARIABLE);
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
		case RoboMLPackage.FUNCTION__INSTRUCTION:
			return ((InternalEList<?>) getInstruction()).basicRemove(otherEnd, msgs);
		case RoboMLPackage.FUNCTION__VARIABLE:
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
		case RoboMLPackage.FUNCTION__INSTRUCTION:
			return getInstruction();
		case RoboMLPackage.FUNCTION__NEW_ATTRIBUTE:
			return getNewAttribute();
		case RoboMLPackage.FUNCTION__RETURN_TYPE:
			return getReturnType();
		case RoboMLPackage.FUNCTION__VARIABLE:
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
		case RoboMLPackage.FUNCTION__INSTRUCTION:
			getInstruction().clear();
			getInstruction().addAll((Collection<? extends Statement>) newValue);
			return;
		case RoboMLPackage.FUNCTION__NEW_ATTRIBUTE:
			setNewAttribute((RMLObject) newValue);
			return;
		case RoboMLPackage.FUNCTION__RETURN_TYPE:
			setReturnType((RMLObject) newValue);
			return;
		case RoboMLPackage.FUNCTION__VARIABLE:
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
		case RoboMLPackage.FUNCTION__INSTRUCTION:
			getInstruction().clear();
			return;
		case RoboMLPackage.FUNCTION__NEW_ATTRIBUTE:
			setNewAttribute(NEW_ATTRIBUTE_EDEFAULT);
			return;
		case RoboMLPackage.FUNCTION__RETURN_TYPE:
			setReturnType(RETURN_TYPE_EDEFAULT);
			return;
		case RoboMLPackage.FUNCTION__VARIABLE:
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
		case RoboMLPackage.FUNCTION__INSTRUCTION:
			return instruction != null && !instruction.isEmpty();
		case RoboMLPackage.FUNCTION__NEW_ATTRIBUTE:
			return newAttribute != NEW_ATTRIBUTE_EDEFAULT;
		case RoboMLPackage.FUNCTION__RETURN_TYPE:
			return returnType != RETURN_TYPE_EDEFAULT;
		case RoboMLPackage.FUNCTION__VARIABLE:
			return variable != null && !variable.isEmpty();
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
		result.append(" (newAttribute: ");
		result.append(newAttribute);
		result.append(", returnType: ");
		result.append(returnType);
		result.append(')');
		return result.toString();
	}

} //FunctionImpl
